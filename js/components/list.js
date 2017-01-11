var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card');
var Form = require('./form');


var List = function(props){
	return (
		<div className="list">
			{props.cards}
			<Form 	onchange={props.onChange}
					onSubmit={props.onSubmit}
			/>
		</div>

	)
};

module.exports = List;



// React.createClass({
// 	getInitialState: function(){
// 		return {
// 			text: "",
// 			cards: ["this is a card6", "this is a card5", "this is a card4", "this is a card3"] 
// 		}
// 	},

// 	onAddInputChanged: function(){
// 		var texts = document.getElementsByClassName('text-input')[0].value;
// 		this.setState({ text: texts });
// 	},

// 	onAddSubmit: function(e){
// 		e.preventDefault();
// 		this.state.cards.push(this.state.text);
// 		var newCardArray = this.state.cards;
		
// 		console.log(newCardArray)
// 		this.setState({ cards: newCardArray }); // "..." Spread syntax

// 	},

// 	renderCards: function(props){
// 		return this.state.cards.map(function(object, index){
// 			return <Card text={object} key={index} />
// 		})

// 	},

// 	render: function(props){
// 		return (
// 			<div className="list">
// 				{this.renderCards()}
// 				<Form 	onchange={this.onAddInputChanged}
// 						onSubmit={this.onAddSubmit}
// 				/>
// 			</div>
			
// 		)
// 	},


// });
