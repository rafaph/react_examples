var React = require('react');

var Trow = React.createClass({

	render: function() {
		var columns = this.props.keys.map(function(k, j) {
			return (
				<td key={j}>
					{this.props.data[k]}
				</td>
			);
		}.bind(this));
		return (
			<tr>
				{columns}
			</tr>
		);
	}

});

module.exports = Trow;