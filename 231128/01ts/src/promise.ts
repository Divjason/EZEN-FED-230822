// 웹브라우저는 html, css, js 3가지 언어만 읽고, 실행!!! => js 프로그래밍 언어를 웹브라우저에서만 사용하지 않고, 웹브라우저가 아닌 다른곳에서도 사용할 수 있도록하기 위해서 태어난 JS 런타임(*실행환경) => Node.js => TS / react

// Node 모듈 중 하나, fs = filesystem 약어
// 사용자가 웹페이지에서 특정 버튼클릭!!!
// 로컬컴퓨터의 파일저장공간에 폴더가 생성
// 입력한 특정데이터를 로컬스토리지 저장
// fetch() => 변수를 전역요소!!
// 서버!!! (*입력값을 => 지역변수)

import { error } from 'console';
import { readFileSync, readFile } from 'fs';

// 동기처리 방식으로 package.json 파일을 가져온 것!
console.log('read package.json using synchronous api...');
const buffer: Buffer = readFileSync('./package.json');
console.log(buffer.toString());

// 비동기처리 방식으로 package.json 파일을 가져온 것!
const readFilePromise = (filename: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    readFile(filename, (error: Error, buffer: Buffer) => {
      if (error) {
        reject(error);
      } else {
        resolve(buffer.toString());
      }
    });
  });
};

// (async () => {
//   const content = await readFilePromise('./package.json');
//   console.log('read package.json using Promise and async/await...');
//   console.log(content);
// })();

async function test() {
  const content = await readFilePromise('./package.json');
  console.log('read package.json using Promise and async/await...');
  console.log(content);
}

test();
