var React = require('react');
var ReactDOM = require('react-dom');

class chatMessage extends React.Component {
  generateClasses() {
    if(this.props.message.from === 'bot') {
      return 'bot-message';
    } else {
      return 'user-message';
    }
  }
  render() {

    
    
    
    return (<div className={this.generateClasses()}>
        <div className="message">{this.props.message.message}</div>
      </div>);
  }
};

module.exports = chatMessage;
