'use strict';
var svgElements = require('./');

it('It\'s all good', function () {
	assert(Array.isArray(svgElements));
	assert(svgElements.length > 10 && svgElements.length < 1000);
});
