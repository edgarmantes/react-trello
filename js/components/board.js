var React = require('react');
var ReactDOM = require('react-dom');

// var Card = require('./card');
var List = require('./list');

var Board = function(props){
		console.log('Board test')
	return(
		<div className="board">
			<div className="title">{props.title}</div>
				<List title="Sports" />
				<List title="Reading" />
				<List title="Learning" />
		</div>
		)
};

module.exports = Board;
