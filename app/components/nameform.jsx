var React = require('react');
var ReactDOM = require('react-dom');


class nameForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: 'test'
        };
        this.update = this.update.bind(this);
   



    }
    
    
    update (){
        
        var x =ReactDOM.findDOMNode(this.refs.myInput).value;
            
        
        console.log(x);
        this.props.onUpdate(x);
    }

    render() {

        var nameFormStyle = {
            fontFamily: "Roboto",
            position: "relative",
            height: "25%",
            width: "50%",
            top: "10vh",
            margin: "auto"




        };



        return (
            <div style={nameFormStyle}>
      
              
          <input type='text' ref='myInput'/>
          <input type='button' onClick={this.update} value='Talk 2 Jeff'/>
         

      

      </div>
        );
    }

}

module.exports = nameForm;
