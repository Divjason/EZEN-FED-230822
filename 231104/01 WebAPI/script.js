let students = ["Kim", "Lee", "Park"];

localStorage.setItem("students", JSON.stringify(students));

let localData;
if (localStorage.getItem("students") === null) {
  localData = [];
} else {
  localData = JSON.parse(localStorage.getItem("students"));
}
localData.push("Choi");
console.log(`${localData}`);
localStorage.setItem("students", JSON.stringify(localData));

const indexOfValue = localData.indexOf("Lee");
localData.splice(indexOfValue, 1);
console.log(`${localData}`);
localStorage.setItem("students", JSON.stringify(localData));

localStorage.removeItem("students");
