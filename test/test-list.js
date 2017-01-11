var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var List = require('../js/components/list');
var Card = require('../js/components/card');

describe('List Component', function(){
	it('Renders a list of cards', function(){
		var words = "Still a test"

		var renderer = TestUtils.createRenderer();
		renderer.render(<List text={words} />);
		var result = renderer.getRenderOutput();
		result.props.className.should.equal('list');

		// var card = result.props.children[0];
		// card.type.should.be.a('function');
		// card.props.text.should.equal(words);

		// var form = result.props.children[1];
		// form.type.should.be.a('function');
		// form.props.should.be.a('object');

		// console.log(form)
	});
});