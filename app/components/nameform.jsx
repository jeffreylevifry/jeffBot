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
        var x = ReactDOM.findDOMNode(this.refs.myInput).value;
        this.state.message = x;
        console.log("INPUT in onUpdate in nameForm.jsx = " +this.state.message);

        this.props.onUpdate(this.state.message);
        this.refs.myInput.value = "";


    }




    render() {

        var nameFormStyle = {
            position: "fixed",
            bottom: 0,
            paddingBottom: "2vh",
            paddingTop: "2vh",
            width: "100%",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "row",
            backgroundColor: "#282858",
            paddingLeft:"2vw",
            paddingRight: "2vw",
            left: 0
          

        };


        var inputStyle = {
            position: "relative",
            width: "87%",
            borderRadius: 1,
            fontFamily: "Roboto",
            backgroundColor: "#d3d3d3",
            border: "none",
            height: "1.75em",
            fontSize: "1.25em",
            textIndent: "1%",
            flexGrow: 1

        };

        var buttonStyle = {

            width: "13%",
            color: "Transparent",
            backgroundColor: "transparent",
            border: "none",
            height: "auto",
            marginLeft: "2%",
            backgroundImage: "url(images/send-icon-new.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",

            flexGrow: 1

        }


        return (
            <div style={nameFormStyle} >
      
              
          <input type='text' id="myInput" ref='myInput' style ={inputStyle} onKeyDown={this.handleKeyPress} />
          <input type='button' style={buttonStyle} onClick={this.onUpdate}/>
         

      

      </div>
        );
    }

}

module.exports = nameForm;
