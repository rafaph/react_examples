var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

var titles = [
	'Logradouro',
	'Bairro',
	'Localidade',
	'UF',
	'CEP'
];

var keys = [
	'logradouro',
    'bairro',
    'localidade',
    'uf',
    'cep'
];

ReactDOM.render(<App titles={titles} keys={keys}/>, document.getElementById('root'));
