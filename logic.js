// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter = idCounter + 1);
    }

    return incrementCounter;
  })(),
  addTodo: function(todos, newTodo) {
    var initialObject = {};
    initialObject['id'] = todoFunctions.generateId();
    initialObject['description'] = newTodo['description'];
    initialObject['done'] = false;
    var todoList = todos.concat(initialObject);
    return todoList;
  },
  deleteTodo: function(todos, idToDelete) {
    var keepArr = todos.filter(function(todo){
        return todo.id != idToDelete;
    });
    return keepArr;
  },

  markTodo: function(todos, idToMark) {
    var markArr = todos.map(function(todo) {
      if (todo.id === idToMark) {
        var copyTodo = Object.assign({}, todo, {done: true})
        // var copyTodo = todo.id;
        // copyTodo = {done: true};
        return copyTodo;
      } else {
        return todo;
      }
    });
    return markArr;
  },
  sortTodos: function(todos, sortFunction) {
    var sortedArr = todos.slice().sort(sortFunction);
    return sortedArr;
  }
};

module.exports = todoFunctions;
