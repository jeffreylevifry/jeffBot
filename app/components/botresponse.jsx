var React = require('react');
var ReactDOM = require('react-dom');


class botResponse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
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

          BOT RESPONSE = {this.state.value}


      </div>
    );
  }
}

module.exports = botResponse;