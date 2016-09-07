'use strict';
import test from 'ava';
import m from './';

test('array', t => {
	t.is(Array.isArray(m), true);
});
