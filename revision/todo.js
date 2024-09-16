const todo = document.todo;
const todoForm = document.forms.todo;

function addTodoItem(text) {
  const li = document.createElement('li');
  li.textContent = text;
  li.addEventListener('click', onTodoCompleted);
  todo.appendChild(li);
}

function onTodoCompleted(event) {
  alert("Well done!");
  event.target.removeEventListener('click', onTodoCompleted);
  event.target.textContent += ' (Completed)';
}

function onNewTodo(event) {
  event.preventDefault();
  const text = event.target.new.value;
  addTodoItem(text);
  todoForm.new.value = '';
}

todoForm.addEventListener('submit', onNewTodo);