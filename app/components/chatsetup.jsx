var React = require('react');
var ReactDOM = require('react-dom');
var io = require('socket.io');



var socket = io('wss://peer-server-kcdcxjxqvq.now.sh', {
  "force new connection" : true,
  "reconnectionAttempts": "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
  "timeout" : 1000, //before connect_error and connect_timeout are emitted.
  "transports" : ["websocket"]
});






var ChatMessage = React.createClass({
  generateClasses: function() {
    if(this.props.message.from === 'bot') {
      return 'bot-message';
    } else {
      return 'user-message';
    }
  },
  render: function() {
    return (<div className={this.generateClasses()}>
        <div className="message">{this.props.message.message}</div>
      </div>);
  }
});







var ChatHistory = React.createClass({
  render: function() {
    return (
      <div className="chat-output">
        {this.props.messages.map(function(message, i) {
          return (
            <ChatMessage key={i} message={message}></ChatMessage>
          );
        })} 
      </div>
    )
  }
});








var ChatMessageComposer = React.createClass({
  getInitialState: function() {
    return {
      inputValue: ''
    };
  },
  
  onKeyPress: function(event) {
    if(event.key !== 'Enter') { return; }
    console.log('do we get here', this.props.messages)
    this.props.sendMessage({
      message: this.state.inputValue,
      from: 'you'
    });
    this.setState({ inputValue: '' });
  },
  
  handleChange: function(event) {
    this.setState({inputValue: event.target.value});
  },
  
  render: function() {
    return (
      <div className="chat-input">
        <input placeholder="Talk to me..." className="user-input" type="text" value={this.state.inputValue} onChange={this.handleChange} onKeyPress={this.onKeyPress}/>
      </div>
    )
  }
});








var Chat = React.createClass({
    
  getInitialState: function() {
    return {
      status: 'Not paired',
      messages: []
    };
  },
  componentDidMount: function() {
    socket.on('connect', () => {
      socket.emit('create:session');
    });

    socket.on('create:pair', () => {
      this.setState({
        status: 'Paired'
      });
    });

    socket.on('destroy:pair', () => {
      this.setState({
        status: 'Not paired',
        messages: []
      });
    });

    socket.on('create:message', (message) => {
      if(this.state.status === 'Not paired') { return; }
      this.recieveMessage(message);
    })
  },
  addMessage: function(message) {
    this.setState(function(previousState) {
      previousState.messages.push(message);
      return { messages: previousState.messages };
    });
  },
  recieveMessage: function(message) {
    this.setState(function(previousState) {
      previousState.messages.push({
        message: message.message,
        from: 'bot'
      });
      return { messages: previousState.messages };
    });
  },
  sendMessage: function(message) {
    socket.emit('create:message', message.message);
    this.addMessage(message)
  },
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  render: function() {
    return (
      <div>
        <div>{this.state.status}</div>
        <ChatHistory messages={this.state.messages}></ChatHistory>
        <ChatMessageComposer sendMessage={this.sendMessage}></ChatMessageComposer>
      </div>
    );
  }
});

ReactDOM.render(<Chat />, document.getElementById('app'));