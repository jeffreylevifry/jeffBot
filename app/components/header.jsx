var React = require('react');
var ReactDOM = require('react-dom');

class header extends React.Component {
  generateClasses() {
    if(this.props.message.from === 'bot') {
      return 'bot-message';      
    } else {
      return 'user-message';
    }
  }
  render() {

var headerStyle = {
    zIndex: 2,
  position: "relative",    
  height: 25,
  width: "100%",
  paddingTop: 15,
  backgroundColor: "#000",
  fontFamily: "Roboto Condensed",
  fontSize: "1em"
}
    
    
    return (<div id="header" style={headerStyle}>JEFF BOT</div>);
  }
};

module.exports = header;