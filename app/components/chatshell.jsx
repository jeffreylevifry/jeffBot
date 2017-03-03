var React = require('react');
var ReactDOM = require('react-dom');
var NameForm = require('./nameform.jsx');
var BotResponse = require('./botresponse.jsx');


class chatShell extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: 'test'
    };
    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate(data) {

    this.callBot(data);
  }
  componentDidMount() {

  }

  callBot(data) {
    
    var message = data.replace(/\?/g,'');
    var that = this;
    console.log("cleaned message = "+message);
    $.ajax({
      type: 'POST',
      url: 'https://aiaas.pandorabots.com/talk/1409614296740/jeffbot?input='+message+'&user_key=b5f54f7af260b694b11fe16c221889f0',
      
      contentType: 'application/x-www-form-urlencoded',
      dataType: 'json',
      success: function(data)  {
        data = data.responses[0];
        that.setState({ data });
      }

    });
   
    

        
     
  }

  render() {


    var outerStyle = {
      height: "25%",
      width: "25%",
      margin: "auto",
      textAlign: "center"

    };


    return (
      <div id="chatShell" style={outerStyle}>
      <NameForm onUpdate={this.onUpdate}/>
      <BotResponse data={this.state.data}/>
      
 
	
			</div>

    )
  }

};



module.exports = chatShell;
