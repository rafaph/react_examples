var React = require('react');

var Thead = require('./Thead');
var Tbody = require('./Tbody');

var Table = React.createClass({
    render: function() {

        return(
        	<table className="table table-hover">
            	<Thead titles={this.props.titles} key={1}/>
            	<Tbody keys={this.props.keys} data={this.props.data} key={2}/>
            </table>
        );
    }

});

module.exports = Table;
