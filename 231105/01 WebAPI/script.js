const todoInput = document.querySelector('#todo-input');
const addButton = document.querySelector('#add-button');
const todoList = document.querySelector('#todo-list');

const getLocal = () => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.forEach((todo) => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-content');
    newTodo.innerText = todo;
    newDiv.appendChild(newTodo);

    todoList.appendChild(newDiv);
  });
};

const saveToLocal = (todo) => {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
};

const addTodo = (e) => {
  e.preventDefault();
  const newDiv = document.createElement('div');
  newDiv.classList.add('todo');
  const newTodo = document.createElement('li');
  newTodo.classList.add('todo-content');
  newTodo.innerText = todoInput.value;
  newDiv.appendChild(newTodo);

  saveToLocal(todoInput.value);

  const completeButton = document.createElement('button');
  completeButton.innerText = '완료';
  completeButton.classList.add('complete-button');
  newDiv.appendChild(completeButton);

  todoList.appendChild(newDiv);
};

document.addEventListener('DOMContentLoaded', getLocal);
addButton.addEventListener('click', addTodo);
