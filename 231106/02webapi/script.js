// 내가 무엇을 하고자 하는가?
// 내가 그 무엇인가를 하기 위해서 필요한것은 무엇인가?

// 프로그램이 작동되는 프로세스
// 1) 사용자가 input태그에 오늘 할 일을 입력한다
// 2) 사용자가 입력한 값이 "제출" 버튼을 클릭했을 때, 특정 저장 공간에 저장된다
// 3) 그 저장된 공간에 담겨있는 사용자의 입력값이 "todo-list"에 출력되어야 한다

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
    newTodo.innerText = todo;
    newTodo.classList.add("todo-content");
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
  });
};

const saveToLocal = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const addTodo = (e) => {
  e.preventDefault();
  const newDiv = document.createElement("div");
  newDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-content");
  newDiv.appendChild(newTodo);

  saveToLocal(todoInput.value);

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
