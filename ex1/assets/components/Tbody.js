var React = require('react');
var Trow = require('./Trow');

var Tbody = React.createClass({
	render: function() {
		var rows = this.props.data.map(function(cep, i) {
			return (
				<Trow keys={this.props.keys} data={cep} key={i}/>
			);
		}.bind(this));
		return (
			<tbody>
				{rows}
			</tbody>
		);
	}
});

module.exports = Tbody;