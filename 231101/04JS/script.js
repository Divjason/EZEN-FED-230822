const result = document.querySelector("#result");
const member1 = ["HTML", "CSS"];
const member2 = ["CSS", "Javascript"];
const member3 = ["Javascript", "Typescript"];

const subjects = [...member1, ...member2, ...member3];
const resultList = new Set();
subjects.forEach((subject) => {
  resultList.add(subject);
});
console.log(resultList);

result.innerHTML = `
<ul>
${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}
</ul>
`;
