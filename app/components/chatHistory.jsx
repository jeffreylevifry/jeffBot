var React = require('react');
var ReactDOM = require('react-dom');


class chatHistory extends React.Component {
  constructor(props) {
    super(props);

    

  }



  render() {

    var historyStyle = {
      position: "relative",
      height: "wrap",
      width: "wrap",
      top: "16vh",
      backgroundColor: "#fff",





    };

console.log(this.props.data);

    return (
      <div id = "chatHistory" style={historyStyle}>

          {this.props.data}


      </div>
    );
  }
}

module.exports = chatHistory;
