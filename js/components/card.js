var React = require('react');
var ReactDOM = require('react-dom');

var Card = function(){
	console.log('card')
	var item = 'This is a Card';
	return (
		<div className="card">{item}</div>
	)
};

module.exports = Card;