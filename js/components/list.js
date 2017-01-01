var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card');

var Button = function(props){
	return <button onSubmit={props.onSubmit} > {props.text} </button>;
};

var List = function(props){

	onAddInputChanged: function(event){
		event.preventDefault();
		console.log('onAddInputChanged test')

	},

	onAddSubmit: function(event){
		event.preventDefault();
		console.log('onAddSubmit test')
	},

	return (
		<div className="list">
			<div className="listTitle">{props.title}</div>
				<Card text="This is card 1" />
				<Card text="This is card 2" />
				<Card text="This is card 3" />
		</div>
		<form className="list-form">
			<input className="text-input" type="text" onChange={this.onAddInputChanged} />
			<button onSubmit={this.onAddSubmit} type="submit" text="Submit Entry">
		</form>
	)
};

module.exports = List;