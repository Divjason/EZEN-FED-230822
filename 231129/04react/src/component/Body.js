import { useState } from 'react';

// useState는 함수입니다.
// useState : 상태관리 훅!!
// useState를 실행하면, 1개의 변수, 1개의 함수를 반환!!!
// 1개의 변수 : 초기값을 담는 그릇의 역할
// 1개의 함수 : 변수안에 담기는 그 초기값을 변경시키는 역할
// useState() => [변수, 함수]
function Body() {
  const [name, setName] = useState('');
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const [gender, setGender] = useState('');
  const onChangeGender = (e) => {
    console.log(e.target.value);
    setGender(e.target.value);
  };
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder="이름" />
      </div>
      <div>
        <select value={gender} onChange={onChangeGender}>
          <option key={''}></option>
          <option key={'남성'}>남성</option>
          <option key={'여성'}>여성</option>
        </select>
      </div>
      <div>
        <input type="date" />
      </div>
      <div>
        <textarea />
      </div>
    </div>
  );
}

export default Body;
