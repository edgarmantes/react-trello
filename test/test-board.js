var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Board = require('../js/components/board');

describe('Board component', function(){
	it('Renders list containers', function(){
		var renderer = TestUtils.createRenderer();
		renderer.render(<Board />);
		var result = renderer.getRenderOutput();
		result.props.className.should.equal('board');
	});
});