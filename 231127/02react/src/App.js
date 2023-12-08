import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

// 분명히 생김새는 함수인데, 첫단어가 대문자로 시작한다면, 컴포넌트 => 컴포넌트의 시작하는 첫단어를 소문자로하면 안되나요?
// 그냥 일반함수 VS 컴포넌트의 역할이 엄연히 다름!!

// JSX 문법!! = Javascript & Xml
// svg => xmlns => xml name space : 해당 xml 문법을 창시한 창시자 혹은 기업을 기리기위한 약속!!
// xml => Extensible markup language => 개발자가 자신만의 고유한 문법을 만들어서 사용하고 싶을 때
// <desk></desk> / <chair></chair>
// html => 시멘틱 / h1 / nav / div 의미!!!

function App() {
  const name = 'David';
  const location = '강남구';

  return (
    <div className="App">
      <Header />
      <Body name={name} location={location} />
      <Footer />
    </div>
  );
}

export default App;
