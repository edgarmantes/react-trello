var React = require('react');
var ReactDOM = require('react-dom');

// var Card = require('./card');
var List = require('./list');

var Board = function(){
		console.log('Board test')
	return(
		<div className="board">
			<List />
			<List />
			<List />
		</div>
		)
};

module.exports = Board;
