
var ReactDOM = require('react-dom');
import React, { PropTypes } from 'react';

class messageTest extends React.Component {
  constructor(props) {
    super(props)
    this._onLoad = this._onLoad.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  generateClasses() {
    if (this.props.from === 'bot') {
      return 'bot-message';
    }
    else {
      return 'user-message';
    }
  }
  
  handleClick() {
    this.props.handleClick(this.props.message.photo);
   
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
      maxWidth: "100%",
      maxHeight: "100%"
    }
    var chatWindowStyle = {
      maxWidth: "100%",
      maxHeight: "100%",
      height: "auto",
      overflow: "auto"
    }

    return (<div id="chatWindow" style ={chatWindowStyle}  >
      
    <div className={this.generateClasses()}>
        <div className="message" onLoad={this._onLoad} >{this.props.message.message}  
        <img src={this.props.message.photo} style={imageStyle} onClick={this.handleClick}/></div>
      </div></div>);
  }
};


messageTest.propTypes = {
  onClick: PropTypes.func,
  message: React.PropTypes.shape({
                   message: React.PropTypes.string,
                   photo: React.PropTypes.string,
                   from: React.PropTypes.string
           }),
}

module.exports = messageTest;


