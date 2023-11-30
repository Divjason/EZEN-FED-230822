import { useState } from 'react';

// useState는 함수입니다.
// useState : 상태관리 훅!!
// useState를 실행하면, 1개의 변수, 1개의 함수를 반환!!!
// 1개의 변수 : 초기값을 담는 그릇의 역할
// 1개의 함수 : 변수안에 담기는 그 초기값을 변경시키는 역할
// useState() => [변수, 함수]
function Body() {
  // const [name, setName] = useState('');
  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };

  // const [gender, setGender] = useState('');
  // const onChangeGender = (e) => {
  //   console.log(e.target.value);
  //   setGender(e.target.value);
  // };

  // const [birth, setBirth] = useState('');
  // const onChangeBirth = (e) => {
  //   setBirth(e.target.value);
  // };

  // const [bio, setBio] = useState('');
  // const onChangeBio = (e) => {
  //   setBio(e.target.value);
  // };
  const [state, setState] = useState({
    name: '',
    gender: '',
    birth: '',
    bio: '',
  });

  const handleOnChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div>
        <input
          name="name"
          value={state.name}
          onChange={handleOnChange}
          placeholder="이름"
        />
      </div>
      <div>
        <select name="gender" value={state.gender} onChange={handleOnChange}>
          <option key={''}></option>
          <option key={'남성'}>남성</option>
          <option key={'여성'}>여성</option>
        </select>
      </div>
      <div>
        <input
          name="birth"
          value={state.birth}
          type="date"
          onChange={handleOnChange}
        />
      </div>
      <div>
        <textarea name="bio" value={state.bio} onChange={handleOnChange} />
      </div>
    </div>
  );
}

export default Body;
