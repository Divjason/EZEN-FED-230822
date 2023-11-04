/*
1.인풋태그 안에 작성된 내용을 어딘가에 담을 수 있는 변수 정의
2.등록버튼의 이벤트를 정의할 수 있도록 조치
3.버튼클릭 시, 입력한 내용이 출력될 공간에 대한 정의
4.입력한 내용을 삭제할 수 있는 버튼에 대한 정의
5.현재 변수에 담겨있는 값을 정렬해줘야할 필요
*/

const form = document.querySelector("form");
const input = document.querySelectorAll("input")[0];
const ul = document.querySelector("ul");

let todos = [];

const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const delItem = (e) => {
  const target = e.target.parentElement;
  todos = todos.filter((todo) => todo.id != target.id);
  target.remove();
  save();
};

const addItem = (todo) => {
  if (todo !== "") {
    const li = document.createElement("li");
    const button = document.createElement("button");
    const span = document.createElement("span");
    span.innerText = todo.text;
    button.innerText = "삭제";
    button.addEventListener("click", delItem);
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id;
  }
};

const handler = (e) => {
  e.preventDefault();
  const todo = {
    id: Date.now(),
    text: input.value,
  };
  todos.push(todo);
  addItem(todo);
  save();
  input.value = "";
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));
  if (userTodos !== null) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });
    todos = userTodos;
  } else {
    todos;
  }
};

init();
form.addEventListener("submit", handler);
