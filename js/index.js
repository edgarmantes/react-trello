require('babel-polyfill');

var React = require('require');
var ReactDOM = require('react-dom');

var Card = require('card');
var List = require('list');
var Board = require('board');

document.addEventListener('DOMContentLoaded', function(){
	ReactDOM.render(<Board />, document.getElementById('app'));

});