var React = require('react');

var SearchForm = React.createClass({
	getInitialState: function() {
		return {
			searchStatus: false,
			searchText: 'Buscar' 
		};
	},
	handleSubmit: function(e){
		e.preventDefault();
		var cep = this.refs.cep.value.trim();
		if(!cep) {
			return;
		}
		this.setState({
			searchStatus: true,
			searchText: 'Buscando...' 
		});
		this.props.onSearchCEP(cep, function() {
			this.setState({
				searchStatus: false,
				searchText: 'Buscar' 
			});
			this.refs.cep.value = '';
		}.bind(this));
		return;
	},
	render: function() {
		var formStyle = {
			marginBottom: 20
		};
		return (
			<form 
				className="form-inline"
				onSubmit={this.handleSubmit}
				style={formStyle}
			>
        		<div className="form-group">
        			<label
        				htmlFor="input-cep"
        			>
        				CEP
        			</label>
        			<input
        				type="text"
        				className="form-control"
        				id="input-cep"
        				placeholder="CEP"
        				disabled={this.state.searchStatus}
        				ref="cep" />
        		</div>
        		<button
        			type="submit"
        			className="btn btn-default"
        			disabled={this.state.searchStatus}
        		>
        			{this.state.searchText}
        		</button>
      		</form>
		);
	}

});

module.exports = SearchForm;