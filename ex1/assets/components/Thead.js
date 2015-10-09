var React = require('react');

var Thead = React.createClass({

	render: function() {
		var titles = this.props.titles.map(function(title, i) {
			return (
				<th key={i}>{title}</th>
			);
		});
		return (
			<thead>
				<tr>
					{titles}
				</tr>
			</thead>
		);
	}

});

module.exports = Thead;