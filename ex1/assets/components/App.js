var React = require('react');
var $ = require('jquery');

var SearchForm = require('./SearchForm');
var Table = require('./Table');

var App = React.createClass({
	getInitialState: function() {
		return {
			data: [] 
		};
	},
	handleSearch: function(cep, cb) {
		$.getJSON('http://cep.correiocontrol.com.br/' + cep + '.json', function(res) {
			this.state.data.push(res);
			this.setState({
				data: this.state.data 
			});
			cb();
		}.bind(this))
		.fail(function(xhr, status, err) {
			console.error(xhr, status, err);
			cb();
		});
	},
	render: function() {
		return (
			<div className="container">
				<div className="col-md-8">
					<SearchForm onSearchCEP={this.handleSearch} />
					<Table
						titles={this.props.titles}
						keys={this.props.keys}
						data={this.state.data}
					/>
		    	</div>
			</div>
		);
	}

});

module.exports = App;