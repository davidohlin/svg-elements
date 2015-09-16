'use strict';
var test = require('ava');
var svgElements = require('./');

test(function (t) {
	t.is(Array.isArray(svgElements), true);
	t.end();
});
