var test = require('tape');
var logic = require('./logic');

test('Initial Test', function(t) {
  t.pass();
  t.end();
});

// test('Test1', function (t) {
// 	t.deepEqual(logic.addTodo([], {description: 'eat more food' }),
// 		initialObject.description: 'eat more food', 'newTodos should return an array of objects with the newTodo')
// 	t.end()
// });
//
test('Test2', function (t) {
	t.deepEqual(logic.addTodo([{description: 'wash dishes'}], {description: 'eat more food'}),
		[{description: 'wash dishes'}, {description: 'eat more food'}], 'newTodos with array that includes a todo should return an array of objects with old and the newTodo')
	t.end()
});
//
// test('Test3', function (t) {
// 	t.deepEqual(logic.addTodo([], {description: 'eat more food' }),
// 		[{id: 1, description: 'eat more food'}], 'Adding ID')
// 	t.end()
// });

test('Test4', function (t) {
	t.deepEqual(logic.addTodo([], {description: 'eat more food' }),
		[{id: 1, description: 'eat more food', done: false}], 'Adding ID')
	t.end()
});

test('Test5', function (t) {
	t.deepEqual(logic.deleteTodo([{id: 1, description: 'eat more food', done: false}], 1),
		[], 'DeleteToDo should return an empty array');
	t.end()
});

test('Test6', function (t) {
	t.deepEqual(logic.deleteTodo([{id: 1, description: 'eat more food', done: false}, {id: 2, description: 'eat no food', done: false}], 1),
		[{id: 2, description: 'eat no food', done: false}], 'DeleteToDo should return one object -- eat no food');
	t.end()
});

test('Test7', function (t) {
	t.deepEqual(logic.markTodo([{id: 1, description: 'eat more food', done: false}, {id: 2, description: 'eat no food', done: false}], 1),
		[{id: 1, description: 'eat more food', done: true}, {id: 2, description: 'eat no food', done: false}], 'markTodo Function should return id1 with done true.');
	t.end()
});
