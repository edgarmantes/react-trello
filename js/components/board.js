var React = require('react');
var ReactDOM = require('react-dom');

// var Card = require('./card');
// var List = require('./list');
var ListContainer = require('./list-container');

var Board = function(props){
	return(
		<div className="board">
			<ListContainer listName="To Do"/>
			<ListContainer listName="Doing"/>
			<ListContainer listName="Donzo"/>
		</div>
		)
};

module.exports = Board;
