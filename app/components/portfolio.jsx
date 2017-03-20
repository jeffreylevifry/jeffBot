var React = require('react');
var ReactDOM = require('react-dom');
var ChatShell = require('./chatshell.jsx');
var Header = require('./header.jsx');



class portfolio  extends React.Component{


    render() {
  
  
  var portStyle = {
    margin: 0,
    padding: 0,
    height:"100%",
    width: "100%",
    textAlign: "center",
    fontFamily: "Roboto"
    
  };


			        
			        
    return (
      <div id="portfolio-outer" style={portStyle}>
     
      	
	  <ChatShell/>
      

	
			</div>

        )
    }
};



module.exports = portfolio;