var React = require('react');
var ReactDOM = require('react-dom');
var NameForm = require('./nameform.jsx');
var ChatMessage = require('./message.jsx');
import SMH from '../../public/scripts/chatHistory.js';

class chatShell extends React.Component {

  constructor(props) {
    super(props)
    
    console.log(SMH.chatHistory);
    
    this.state = {
      totalImageHeight: 0,
      messageHistory: SMH.chatHistory 
         
    };
    
    
    
  
    //function bindings
    this.onMessageInput = this.onMessageInput.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.recieveMessage = this.recieveMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.onLoad = this.onLoad.bind(this);
    this.showHide = this.showHide.bind(this);



  }

  onLoad(x) {


    this.bottomScroll(x);


  }
  
  componentDidMount() {
    
    if(SMH.chatHistory.length<2){
    this.callBot("main menu");
    }
  }
  
  

  showHide(photo) {

    console.log("showHide function photo = " + photo);
    this.props.showHide(photo);
  }
  
  

  onMessageInput(message) {
    /// no blank inquries allowed
    if (message == "") {
      return;
    }
    //add message to the history and API call
    this.addMessage(message);
    this.callBot(message);
  }
  
  
  

  callBot(message) {
    //test for special key words to load pictures
    var specialQTest = window.specialQueries(message);
    that = this;
    if (specialQTest != null) {
      setTimeout(function(){ that.recieveMessage(specialQTest[0], specialQTest[1]);},500);
     

    }
    
    ///API call if message is not keyworded
    
    else {
      var message = message.replace(/\?/g, '');
      var that = this;

      $.ajax({
        type: 'POST',
        url: 'https://aiaas.pandorabots.com/talk/1409614296740/jeffbot?input=' + message + '&user_key=b5f54f7af260b694b11fe16c221889f0',

        contentType: 'application/x-www-form-urlencoded',
        dataType: 'json',
        success: function(data) {
          data = data.responses[0];
          that.recieveMessage(data);

        }

      });
    }
  }



  addMessage(data) {

    this.setState(function(previousState) {
 
      
          SMH.chatHistory.push({
        message: data,
        from: 'you'
      });
      return {
        messageHistory: SMH.chatHistory
      };
    })


  }



  recieveMessage(data, photo) {

    this.setState(function(previousState) {
      
      
    SMH.chatHistory.push({
        message: data,
        photo: photo,
        from: 'bot'
      });
      
      
      return {
        messageHistory: SMH.chatHistory
      };
    }), this.bottomScroll(0);

  }



  sendMessage(message) {

    this.addMessage(message);

  }



  bottomScroll(x) {
    console.log("**************************START BOTTOMSCROLL****************************");

    // this value is hardcoded as the bottom margin of .message in the main.scss file
    var messageBottomMargin = 20;

    //get size of the input box
    var inputSize = ((ReactDOM.findDOMNode(this.refs.inputSize)).clientHeight);


    //get message height
    var node = ReactDOM.findDOMNode(this.refs.message);

    //calculate page height based on messages
    var messagesInHistory = this.state.messageHistory.length;


    //calculate individual message height
    var messageHeight = node.clientHeight + messageBottomMargin;

    //calculate the new height of all images and set state for future. use the variable for the scrollTo equation because state is aysnc
    var newTotalImageHeight = this.state.totalImageHeight + x;
     this.setState({totalImageHeight: newTotalImageHeight});


    // scroll to bottom of the page plus margin
    
     var scrollTo = Math.round((messagesInHistory * messageHeight) + inputSize + newTotalImageHeight);

    console.log("scrollTo = "+ scrollTo);
    window.scrollTo(0, scrollTo);


  }


  render() {

    var outerStyle = {
      position: "relative",
      height: "100%",
      width: "96%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "auto",
      marginBottom: "15vh",
      padding: "2%",
      backgroundImage: "none"

    };





    return (

      <div id="chatShell" style={outerStyle} ref ="chatShell" >
  
              {this.state.messageHistory.map(function(message, i, image ) {
          return (
            <ChatMessage key={i} message={message} image={image} onLoad={this.onLoad} handleClick={this.showHide} ref="message"> </ChatMessage>
           );
           
        }, this)} 
      <NameForm  onUpdate={this.onMessageInput} ref="inputSize"/>
 
			</div>

    )
  }


};



module.exports = chatShell;