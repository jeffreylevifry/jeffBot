var React = require('react');
var ReactDOM = require('react-dom');
var ChatShell = require('./chatshell.jsx');



class portfolio  extends React.Component{


    render() {
  
  
  var portStyle = {
    position: "absolute",
    height:"100%",
    width: "100%",
    textAlign: "center",
    fontFamily: "Roboto"
    
  };

			
    return (
      <div id="portfolio-outer" style={portStyle}>
      		JEFF BOT TEST
	  <ChatShell/>
      
 
	
			</div>

        )
    }
};



module.exports = portfolio;