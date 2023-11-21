// JS 오름차순, 내림차순 어떻게 정렬하는가?
// JS 오름차순, 내림차순 정렬하기 위한 함수?!
// = sort()
// sort()는 정렬하고자하는 아이템의 첫번째 요소를 기준으로 정렬을 한다. 정렬기준 : 숫자가 아닌 아스키 문자 형식을 기준!!!

// const number01 = [10, 3, 8, 4, 1];
// number01.sort();
// console.log(number01);

// const number02 = [10, 3, 8, 4, 1];
// const compare02 = (a, b) => {
//   return a - b;
// };
// number02.sort(compare02);
// console.log(number02);

// const number03 = [10, 3, 8, 4, 1];
// const compare03 = (a, b) => {
//   return b - a;
// };
// number03.sort(compare03);
// console.log(number03);

const userDataList = [
  { id: 2, name: '곰' },
  { id: 10, name: '여우' },
  { id: 4, name: '사자' },
  { id: 29, name: '기린' },
  { id: 101, name: '호랑이' },
];

const ascending = document.querySelector('.ascending');
const descending = document.querySelector('.descending');
const userList = document.querySelector('.user_list');

const updateList = () => {
  let listHtml = '';
  for (let data of userDataList) {
    listHtml += `
    <li>${data.id} : ${data.name}</li>
    `;
  }
  userList.innerHTML = listHtml;
};

const sortByAscending = () => {
  userDataList.sort((a, b) => {
    return a.id - b.id;
  });
  updateList();
};

const sortByDescending = () => {
  userDataList.sort((a, b) => {
    return b.id - a.id;
  });
  updateList();
};

ascending.addEventListener('click', () => {
  sortByAscending();
});

descending.addEventListener('click', () => {
  sortByDescending();
});

sortByAscending();
