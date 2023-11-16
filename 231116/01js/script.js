const major = document.querySelector('#major');
console.log(major);

const displaySelect = () => {
  let selectedText = major.options[major.selectedIndex].innerText;
  alert(`[${selectedText}]를 선택했습니다.`);
};

major.addEventListener('change', displaySelect);
