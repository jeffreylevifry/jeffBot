var React = require('react');
var ReactDOM = require('react-dom');
var NameForm = require('./nameform.jsx');
var BotResponse = require('./botresponse.jsx');


class chatShell  extends React.Component{


    render() {
  
  
  var outerStyle = {
    height:"25%",
    width: "25%",
    margin: "auto",
    textAlign: "center"
    
  };

			
    return (
      <div id="chatShell" style={outerStyle}>
      <NameForm/>
      <BotResponse/>
      
 
	
			</div>

        )
    }
};



module.exports = chatShell;