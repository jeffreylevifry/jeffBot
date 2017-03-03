var React = require('react');
var ReactDOM = require('react-dom');


class botResponse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    console.log(this.props.data);

  }



  render() {

    var botResponseStyle = {
      position: "relative",
      height: "25%",
      width: "50%",
      top: "16vh",
      margin: "auto"




    };



    return (
      <div style={botResponseStyle}>

          BOT RESPONSE = {this.props.data}


      </div>
    );
  }
}

module.exports = botResponse;
