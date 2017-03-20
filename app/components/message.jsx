var React = require('react');
var ReactDOM = require('react-dom');

class chatMessage extends React.Component {
    constructor(props) {
    super(props)
  this._onLoad = this._onLoad.bind(this);

    }
  
  generateClasses() {
    if(this.props.message.from === 'bot') {
      return 'bot-message';      
    } else {
      return 'user-message';
    }
  }
  
    _onLoad(e) {

    this.props.onLoad(e.target.offsetHeight);
    }
  
  
  render() {

var spacerStyle = {
  height: 70,
  width: "100%"
}
var imageStyle = {
maxWidth:"100%",
maxHeight:"100%"
}    
    
    return (<div id="chatWindow"  >
      
    <div className={this.generateClasses()}>
        <div className="message" onLoad={this._onLoad} >{this.props.message.message}  <img src={this.props.message.photo} style={imageStyle} /></div>
      </div><div id="spacer" style={spacerStyle}></div></div>);
  }
};

module.exports = chatMessage;
