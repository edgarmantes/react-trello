var React = require('react');
var ReactDOM = require('react-dom');

var List = require('./list');
var Card = require('./card');

var ListContainer = React.createClass({
	getInitialState: function(){
		return {
			text: "",
			textArray: [],
			cards:[]
		}
	},

	onAddInputChanged: function(){
		var texts = document.getElementsByClassName('text-input')[0].value;
		this.setState({ text: texts });
	},

	onAddSubmit: function(e){
		e.preventDefault();
		var addText = this.state.text
		this.state.textArray.push(addText)
		this.setState({ cards: this.renderCards() }); // "..." Spread syntax
	},

	renderCards: function(props){
		return this.state.textArray.map(function(object, index){
			return <Card text={object} key={index} />
		})

	},


	render: function(){
		return (
			<div className="list-container">
				<div className="list-name">{this.props.listName}</div>
				<List 	cards={this.state.cards} 
						onChange={this.onAddInputChanged}
						onSubmit={this.onAddSubmit} />
			</div>	
		)
	}
});

module.exports = ListContainer
