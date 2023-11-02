let xhr = new XMLHttpRequest();

xhr.open("get", "student-2.json", true);
xhr.send();

let renderHTML = (contents) => {
  let output = "";
  for (let content of contents) {
    output += `
    <h2>${content.name}</h2>
    <ul>
      <li>히트곡 : ${content.music}</li>
      <li>나이 : ${content.year}</li>
    </ul>
    `;
  }
  document.querySelector("#result").innerHTML = output;
};

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let students = JSON.parse(xhr.responseText);
    renderHTML(students);
  }
};
