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
    var markedArr = todos.map(function(todo) {
      var copiedTodo = Object.assign({}, todo);
      if (copiedTodo.id === idToMark)
          copiedTodo.done = !copiedTodo.done;
      return copiedTodo;
    });
    return markedArr;
  },
  sortTodos: function(todos, sortFunction) {
    var sortedArr = todos.slice().sort(sortFunction);
    return sortedArr;
  }
};

if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
