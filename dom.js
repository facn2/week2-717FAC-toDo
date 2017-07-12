// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'first todo', done: false},
    { id: -2, description: 'second todo', done: false},
    { id: -1, description: 'third todo', done: false },
    { id: 0, description: '4th todo', done: false}
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    // add span holding description
    var desSpan = document.createElement('span');
    desSpan.innerText = todo['description'];
    todoNode.appendChild(desSpan);
    // this adds the delete button -- finish
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.addEventListener('click', function() {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);

    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
    var markTodoButtonNode = document.createElement('button');
    markTodoButtonNode.addEventListener('click', function() {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
      desSpan.classList.add('lineThrough');
      this.classList.add('checkedButton');
    });
    todoNode.appendChild(markTodoButtonNode);
    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function() {
    var input = document.querySelectorAll('input')[0].value;
    event.preventDefault();

    var inputObject = {};
    inputObject['description'] = input;

    var newState = todoFunctions.addTodo(state, inputObject);

    update(newState);

    // todoNode.createTodoNode;
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
