(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  // Initial ToDo List
  var state = [
    { id: -3, description: 'Buy some onions', done: false},
    { id: -2, description: 'Chop them finely', done: false}
  ];

  // For each ToDo Object
  var createTodoNode = function(todo) {
    // Create li tag for each todo
    var todoNode = document.createElement('li');
    // And span tags
    var desSpan = document.createElement('span');
    // Set the inner-text of span tags equal to the 'value' of the 'key' description 
    desSpan.innerText = todo['description'];
    // Append the description to the li tag
    todoNode.appendChild(desSpan);
    //End

    // For each Todo Object create a delete Button
    var deleteButtonNode = document.createElement('button');
    // Append Trash Can icon  to Delete Button using Font-Awesome Library
    var deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa fa-trash';
    deleteButtonNode.appendChild(deleteIcon)
    // Append Delete Button to li 
    todoNode.appendChild(deleteButtonNode);

    // When Delete Button is clicked run function of deleteTodo in logic.js
    // make a varialbe newState which is the result of the deleteTodo function
    deleteButtonNode.addEventListener('click', function() {
      var newState = todoFunctions.deleteTodo(state, todo.id);
    // run update function which updates state to become newstate
      update(newState);
    });

    // For each Todo Object create a markTodo Button
    var markTodoButtonNode = document.createElement('button');
    // Append check icon to to the MarkToDo Button
    var markIcon = document.createElement('i');
    markIcon.className = 'fa fa-check';
    markTodoButtonNode.appendChild(markIcon);
    //Append MarkToDo Button to li 
    todoNode.appendChild(markTodoButtonNode);

    // When markToDo Button is clicked run function of markTodo in logic.js
    // make a varialbe newState which is the result of the deleteTodo function
    markTodoButtonNode.addEventListener('click', function() {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
    // After running markTodo function the checked todo is given value todo.done of true
    // For the marked todo add to classList
    if(todo.done == true) {
      desSpan.classList.add('lineThrough');
      markTodoButtonNode.classList.add('checkedButton');
    }

    //add sortButton
    document.getElementById('sortButton').addEventListener('click', function() {
      var newState = todoFunctions.sortTodos(state, function(a, b){
          if (a.description < b.description) return -1;
          else return 1;
        });
      update(newState);
    });
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
    addTodoForm.reset();

    update(newState);
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
