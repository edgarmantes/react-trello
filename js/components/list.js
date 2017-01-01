var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card');


var List = function(props){
	return (
		<div className="list">
			<div className="listTitle">{props.title}</div>
				<Card text="This is card 1" />
				<Card text="This is card 2" />
				<Card text="This is card 3" />
		</div>
	)
};

module.exports = List;