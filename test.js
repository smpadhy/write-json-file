import path from 'path';
import fs from 'fs';
import test from 'ava';
import tempfile from 'tempfile';
import m from './';

test('async', async t => {
	const tmp = path.join(tempfile(), 'foo');
	await m(tmp, {foo: true}, {indent: 2});
	t.is(fs.readFileSync(tmp, 'utf8'), '{\n  "foo": true\n}\n');
});

test('sync', t => {
	const tmp = path.join(tempfile(), 'foo');
	m.sync(tmp, {foo: true}, {indent: 2});
	t.is(fs.readFileSync(tmp, 'utf8'), '{\n  "foo": true\n}\n');
});
