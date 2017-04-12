var React = require('react');
var ReactDOM = require('react-dom');

class showChatButton extends React.Component {


    constructor(props) {
        super(props)
    }


    render() {


        var buttonStyle = {
            position: "relative",
            left: "auto",
            right: "auto",
            marginTop: "80%"

        }


        return (
            <button type="button" onClick={this.props.onClick} style={buttonStyle}>SHOW CHAT</button>

        )
    }
};

module.exports = showChatButton;
