function MyButton(props) {
  // useState() : 리액트 상태변화 함수!!!
  // 상태변화 : 웹 브라우저 안에있는 문서에 뭔가 변화가 발생하는것
  // 첫번째 변수에는 기본값
  // 두번째 변수의 역할은 isClicked 첫번째 변수의 값을 변화시켤 수 있는 함수의 역할!!!
  const [isClicked, setIsClicked] = React.useState(false);
  return React.createElement(
    'button',
    { onClick: () => setIsClicked(true) },
    isClicked ? 'Clicked!' : 'Click Here!'
  );
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);
