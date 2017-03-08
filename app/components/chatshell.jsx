var React = require('react');
var ReactDOM = require('react-dom');
var NameForm = require('./nameform.jsx');
var ChatHistory = require('./chatHistory.jsx');
var ChatMessage = require('./message.jsx');


class chatShell extends React.Component {

  constructor(props) {
    super(props)
    this.state = {messageHistory: [{message: "Oh hai",from: "bot"}]};
    this.onMessageInput = this.onMessageInput.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.recieveMessage = this.recieveMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);


  }



  onMessageInput(message) {
    if (message == "") {
      return;
    }
    this.addMessage(message);
    this.callBot(message);
  }

  componentDidMount() {


  }

  callBot(message) {


    var message = message.replace(/\?/g, '');
    var that = this;
    console.log("cleaned message = " + message);
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



  addMessage(data) {

    this.setState(function(previousState) {
      previousState.messageHistory.push({
        message: data,
        from: 'you'
      });
      return {
        messageHistory: previousState.messageHistory
      };
    });
  }
  
  
  
  recieveMessage(data) {

    console.log(this.state.messageHistory);
    this.setState(function(previousState) {
      previousState.messageHistory.push({
        message: data,
        from: 'bot'
      });

      return {
        messageHistory: previousState.messageHistory
      };
    });
  }
  
  
  sendMessage(message) {

    this.addMessage(message)
  }




  render() {


    var outerStyle = {
      height: "96%",
      width: "96%",
      margin: "auto",
      padding: "2%"


    };




    console.log(this.state.messageHistory);




    return (

      <div id="chatShell" style={outerStyle}>

        
      
              {this.state.messageHistory.map(function(message, i) {
          return (
  
            <ChatMessage key={i} message={message}></ChatMessage>
       
         
          );
        })} 

      
      
      <NameForm  onUpdate={this.onMessageInput}/>
 

			</div>



    )
  }


};
















module.exports = chatShell;
