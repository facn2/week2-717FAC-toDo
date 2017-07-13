var test = require('tape');
var logic = require('./logic');

test('Test add to do to empty array', function (t) {
	t.deepEqual(logic.addTodo([], {description: 'eat more food'}),
		[{id: 1, description: 'eat more food', done: false}], 'Adding ID')
	t.end()
});

test('Test delete with one elements return empty array', function (t) {
	t.deepEqual(logic.deleteTodo([{id: 1, description: 'eat more food', done: false}], 1),
		[], 'DeleteToDo should return an empty array');
	t.end()
});

test('Test delete to do when array has more elements', function (t) {
	t.deepEqual(logic.deleteTodo([{id: 1, description: 'eat more food', done: false}, {id: 2, description: 'eat no food', done: false}], 1),
		[{id: 2, description: 'eat no food', done: false}], 'DeleteToDo should return one object -- eat no food');
	t.end()
});

test('Test mark to do', function (t) {
	t.deepEqual(logic.markTodo([{id: 1, description: 'eat more food', done: false}, {id: 2, description: 'eat no food', done: false}], 1),
		[{id: 1, description: 'eat more food', done: true}, {id: 2, description: 'eat no food', done: false}], 'markTodo Function should return id1 with done true.');
	t.end()
});
