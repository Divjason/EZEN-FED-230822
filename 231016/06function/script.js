// 호이스팅 = hoisting => 끌어올리다

let count = 0;

myFnc();

function myFnc() {
  count++;
  document.write(`hello ${count} <br/>`);
}

myFnc();

let theFnc = () => {
  count++;
  document.write(`bye ${count}`);
};

theFnc();
