var React = require('react');
var ReactDOM = require('react-dom');


var Button = function(props){
	return <button onClick={props.onSubmit} > {props.text} </button>;
};

var Form = function(props){
	return (
		<form>
			<input className="text-input" type="text" onChange={props.onchange} />
			<Button onSubmit={props.onSubmit} type="submit" text="Submit Entry" />
		</form>
		)
};

module.exports = Form;