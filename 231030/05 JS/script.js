const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

let numbers = [2, 4, 6, 8, 10];

let showArray = (area, arr) => {
  let str = "<table><tr>";
  for (let i = 0; i < arr.length; i++) {
    str += `<td>${arr[i]}</td>`;
  }
  str += "</tr></table>";
  area.innerHTML = str;
};

showArray(origin, numbers);

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
numbers.push(sum);
showArray(result, numbers);
