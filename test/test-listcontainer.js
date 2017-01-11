var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var ListContainer = require('../js/components/list-container')

describe('ListContainer component', function(){
	it('Renders a list of cards and a submit button', function(){

		var renderer = TestUtils.createRenderer();
		renderer.render(<ListContainer />);
		var result = renderer.getRenderOutput();
	});
});