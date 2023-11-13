<<<<<<< HEAD
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
=======
const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

const getLocal = () => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach((todo) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-content");
    newTodo.innerText = todo;
    newDiv.appendChild(newTodo);

    const completeButton = document.createElement("button");
    completeButton.innerText = "완료";
    completeButton.classList.add("complete-button");
    newDiv.appendChild(completeButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "삭제";
    deleteButton.classList.add("delete-button");
    newDiv.appendChild(deleteButton);

    todoList.appendChild(newDiv);

    todoInput.value = "";
>>>>>>> 8c28332bef531262fad579d85edb95782ea971c0
  });
};

const saveToLocal = (todo) => {
  let todos;
<<<<<<< HEAD
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
=======
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
>>>>>>> 8c28332bef531262fad579d85edb95782ea971c0
};

const addTodo = (e) => {
  e.preventDefault();
<<<<<<< HEAD
  const newDiv = document.createElement('div');
  newDiv.classList.add('todo');
  const newTodo = document.createElement('li');
  newTodo.classList.add('todo-content');
=======
  const newDiv = document.createElement("div");
  newDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-content");
>>>>>>> 8c28332bef531262fad579d85edb95782ea971c0
  newTodo.innerText = todoInput.value;
  newDiv.appendChild(newTodo);

  saveToLocal(todoInput.value);

<<<<<<< HEAD
  const completeButton = document.createElement('button');
  completeButton.innerText = '완료';
  completeButton.classList.add('complete-button');
  newDiv.appendChild(completeButton);

  todoList.appendChild(newDiv);
};

document.addEventListener('DOMContentLoaded', getLocal);
addButton.addEventListener('click', addTodo);
=======
  const completeButton = document.createElement("button");
  completeButton.innerText = "완료";
  completeButton.classList.add("complete-button");
  newDiv.appendChild(completeButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "삭제";
  deleteButton.classList.add("delete-button");
  newDiv.appendChild(deleteButton);

  todoList.appendChild(newDiv);

  todoInput.value = "";
};

const removeLocal = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  const index = todos.indexOf(todo.children[0].innerText);
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const manageTodo = (e) => {
  const whichButton = e.target.classList[0];
  if (whichButton === "complete-button") {
    const todo = e.target.parentElement;
    todo.children[0].classList.toggle("completed");
  } else if (whichButton === "delete-button") {
    const todo = e.target.parentElement;
    removeLocal(todo);
    todo.remove();
  }
};

document.addEventListener("DOMContentLoaded", getLocal);
addButton.addEventListener("click", addTodo);
todoList.addEventListener("click", manageTodo);
>>>>>>> 8c28332bef531262fad579d85edb95782ea971c0
