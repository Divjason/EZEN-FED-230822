/*
1.버튼기능에대한 정의
2.인풋박스에들어온 컨텐츠에대한 정의
3.버튼을 눌렀을 때, ul태그안에 순서대로 등록될 수 있도록 버튼에 이벤트를 부여해줘야 한다
4.ul태그 안에 li태그에 대한 공간 정의
5.각 기능별 코드를 분업화해주는 것이 좋다!!
*/

const form = document.querySelector("form");
const input = document.querySelectorAll("input")[0];
const ul = document.querySelector("ul");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (input.value !== "") {
//     const li = document.createElement("li");
//     li.innerText = input.value;
//     ul.appendChild(li);
//     input.value = "";
//   }
// });

let todos = [];

const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const delItem = (e) => {
  const target = e.target.parentElement;
  todos = todos.filter((todo) => todo.id != target.id);
  save();
  target.remove();
};

const addItem = (todo) => {
  if (todo !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

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
  if (todo.text != "") {
    todos.push(todo);
    addItem(todo);
    save();
    input.value = "";
  } else {
    alert("오늘 할 일을 입력하세요!");
  }
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));
  userTodos.forEach((todo) => {
    addItem(todo);
  });
  todos = userTodos;
};

init();
form.addEventListener("submit", handler);
