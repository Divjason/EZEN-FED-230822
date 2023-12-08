import React from 'react';
import './Body.css';
function Body(props) {
  console.log(props);
  const { name, location } = props;
  // 지금 작성하고 있는 이 문법이 JSX
  // 단락회로평가!!
  // 리액트 출력문에 원시타입 자료는 특정한 제약조건없이 입출력이 가능하나 객체타입 자료는 원천적으로 불가!!!

  // JSX 문법에서 반드시 지켜야하는 유의사항!!
  // 1) 객체타입은 절대로 직접적으로 사용불가
  // 2) 반드시 마크업 타입으로 작성!!
  // 3) 반드시 최상위 부모가 존재해야 함!!!

  return (
    <div>
      <h1>
        {name}는 {location}에 거주중입니다!
      </h1>
    </div>
  );
}

export default Body;
