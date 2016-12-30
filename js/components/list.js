var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card');


var List = function(){
	return (
		<div className="list">
			<Card />
			<Card />
			<Card />
		</div>
	)
};

module.exports = List;