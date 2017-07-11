var test = require('tape');
var logic = require('./logic');

// test('Initial Test', function(t) {
//   t.pass();
//   t.end();
// });

// test('Test1', function (t) {
// 	t.deepEqual(logic.addTodo([], {description: 'eat more food' }), 
// 		initialObject.description: 'eat more food', 'newTodos should return an array of objects with the newTodo')
// 	t.end()
// });

// test('Test2', function (t) {
// 	t.deepEqual(logic.addTodo([{description: 'wash dishes'}], {description: 'eat more food' }), 
// 		[{description: 'wash dishes'}, {description: 'eat more food'}], 'newTodos with array that includes a todo should return an array of objects with old and the newTodo')
// 	t.end()
// });

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

test('Test4', function (t) {
	t.deepEqual(logic.addTodo([], {description: 'eat more food' }), 
		[{id: 1, description: 'eat more food', done: false}], 'Adding ID')
	t.end()
});

