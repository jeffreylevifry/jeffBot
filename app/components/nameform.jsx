var React = require('react');
var ReactDOM = require('react-dom');


class nameForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: 'Talk to me!'
        };
        this.onUpdate = this.onUpdate.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

    }



    handleKeyPress(event) {

        if (event.key == 'Enter') {

            this.onUpdate();
            return;

        };


    }

    onUpdate() {
        console.log("update fired");
        var x = ReactDOM.findDOMNode(this.refs.myInput).value;
        this.state.message = x;
        console.log(this.state.message);

        this.props.onUpdate(this.state.message);
        this.refs.myInput.value = "";


    }




    render() {

        var nameFormStyle = {
            position: "absolute",
            bottom: 0,
            paddingBottom: "10vh",
            paddingTop: "3vh",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#131163",
            left: 0,
          

        };


        var inputStyle = {
            position: "relative",
            width: "80%",

            borderRadius: 10,
            fontFamily: "Roboto",
            backgroundColor: "#99ffff",
            border: "none",
            height: "1.5em",
            fontSize: "1em",
            padding: ".15em",
            margins: "1%"

        };

        var buttonStyle = {
            borderRadius: 6,
            backgroundColor: "#11ffff",
            fontFamily: "Roboto Condensed",
            border: "none",
            width: "13%",
            fontSize: "1em",
            height: "1.75em",
            marginLeft: ".5em",
            padding: ".15em"
        }


        return (
            <div style={nameFormStyle} >
      
              
          <input type='text'  ref='myInput' style ={inputStyle} onKeyDown={this.handleKeyPress} />
          <input type='button' style={buttonStyle} onClick={this.onUpdate} value='SEND'/>
         

      

      </div>
        );
    }

}

module.exports = nameForm;
