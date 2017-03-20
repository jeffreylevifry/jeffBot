var React = require('react');
var ReactDOM = require('react-dom');
var NameForm = require('./nameform.jsx');
var ChatMessage = require('./message.jsx');

//variable for scrolling. see bottomScroll() below
var marginBottom = 200;
var totalImageHeight;


class chatShell extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      imageHeight: 0,
      totalImageHeight: 0,
      messageHistory: [{
        message: "Oh, Hi there, I didn't see you come in!",
        from: "bot"
        
      }]
    };
    

    this.onMessageInput = this.onMessageInput.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.recieveMessage = this.recieveMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.onLoad = this.onLoad.bind(this);
    this.setImage = this.setImage.bind(this);


  }

   onLoad(x) {
    
   this.setState({ imageHeight: x}, this.setImage(x));
   
  
   

   
   
   
}

 setImage(x){
   marginBottom = marginBottom + x;
       //add current imageHeight to grand total imageheight 
    var currentTotalImageHeight = this.state.totalImageHeight;    
    this.setState({totalImageHeight : currentTotalImageHeight + x} );
    console.log("setImage() totalimageHeight = "+ this.state.totalImageHeight);
  
    this.bottomScroll(x); 
   
 }

  onMessageInput(message) {
    
    
    if (message == "") {
      return;
    }
    this.addMessage(message);
    this.callBot(message);
  }

  callBot(message) {
    var specialQTest = window.specialQueries(message);
    if (specialQTest != null) {
      this.recieveMessage(specialQTest[0],specialQTest[1]);

    }
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
      previousState.messageHistory.push({
        message: data,
        from: 'you'
      });
      return {
        messageHistory: previousState.messageHistory
      };
    })
    
    
  }



  recieveMessage(data, photo) {


    this.setState(function(previousState) {
      previousState.messageHistory.push({
        message: data,
        photo: photo,
        from: 'bot'
      });

      return {
        messageHistory: previousState.messageHistory
      };
    }), this.bottomScroll(0);

  }


  sendMessage(message) {

    this.addMessage(message);

  }



  componentDidUpdate() {
    
    
    

  }




  bottomScroll(x) {

    
    var messageBottomMargin = 20;
    
        //get size of the input box
    var inputSize = ((ReactDOM.findDOMNode(this.refs.inputSize)).clientHeight);
     

    //get message height
    var node = ReactDOM.findDOMNode(this.refs.message);

        //calculate page height based on messages
    var messagesInHistory = this.state.messageHistory.length + 2;
    
    
    //calculate individual message height
    var messageHeight = node.clientHeight + messageBottomMargin;
    
  //  var imageHeightMargin = x + messageBottomMargin;

    var totalImageHeight = this.state.totalImageHeight + x;

    // scroll to bottom of the page plus margin
    var scrollTo = Math.round((messagesInHistory * messageHeight) + inputSize + totalImageHeight );

    
   console.log(".totalImageHeight = "+ totalImageHeight+ "  x = "+ x + "messages in history = "+ messagesInHistory);
   console.log("scrollTo = "+ scrollTo + "marginBottom = "+ marginBottom);
    
    
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
      marginBottom: marginBottom,
      padding: "2%",
      backgroundImage: "none"

    };





    return (

      <div id="chatShell" style={outerStyle} ref ="chatShell" >
      
  
              {this.state.messageHistory.map(function(message, i, image ) {
          return (
  
            <ChatMessage key={i} message={message} image={image} onLoad={this.onLoad} ref="message"> </ChatMessage>
            
           );
        }, this)} 
      <NameForm  onUpdate={this.onMessageInput} ref="inputSize"/>
 
			</div>

    )
  }


};



module.exports = chatShell;
