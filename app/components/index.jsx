var React = require('react');
var ReactDOM = require('react-dom');


class index  extends React.Component{


    render() {


			
    return (
      

     <div id="index">

			{this.props.children}
			</div>

        )
    }
};



module.exports = index;