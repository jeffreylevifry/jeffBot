var React = require('react');
var ReactDOM = require('react-dom');


class index  extends React.Component{


    render() {

    var indexStyle={
        height: "100%",
        width: "100%"
    }
			
    return (
      

     <div id="index" style = {indexStyle}>

			{this.props.children}
			</div>

        )
    }
};



module.exports = index;