var React = require('react');
var ReactDOM = require('react-dom');
var ChatShell = require('./chatshell.jsx');
var Header = require('./header.jsx');
var Hide = require('./showChatButton.jsx');
var bgImage ="none";



class portfolio  extends React.Component{
  
  
  
    constructor(props) {
    super(props)
    this.state = { showChat: true },{showHideButton: false},{bgImage: bgImage};
    this.showPhoto = this.showPhoto.bind(this);
    this.showChat = this.showChat.bind(this);
    }
    

        
    
    
    
    showPhoto(photo) {

    bgImage = "url("+photo+")";
    this.setState({ showChat: false });
    this.setState({ showHideButton: true});
    this.setState({ bgImage: photo});
  }
  
    showChat() {
      
    console.log("hide button clicked");

    this.setState({ showChat: true });
    this.setState({ showHideButton: false });
  }

    render() {
  
  
  var portStyle = {
    zIndex: -2,
    margin: 0,
    padding: 0,
    height: "auto",
    backgroundImage: bgImage,
 //   backgroundColor: "#3f3f3f",
    backgroundSize: "contain",
    paddingBottom: 500,
    width: "100%",
    textAlign: "center",
    fontFamily: "Roboto"
    
  };


			        
			        
    return (
      <div id="portfolio-outer" style={portStyle} >
     
      	{ this.state.showChat ? <ChatShell showHide={this.showPhoto}/> : null }
        { this.state.showHideButton ? <Hide onClick={this.showChat}/> : null }
      

	
			</div>

        )
    }
};

	      

module.exports = portfolio;