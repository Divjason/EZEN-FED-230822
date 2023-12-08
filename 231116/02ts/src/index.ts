// 추상화!!
// 추상적인 개념을 무언가의 형태로 시각화!!!
// 추상클래스
// 생성자함수를 활용해서 클래스를 만들고자 하는데, 그때 해당 클래스의 몸통이 되어지는 요소를 추상적 기법으로 가져와서 클래스를 만드는 것을!!

// class를 활용해서 프로토타입의 객체를 만든다는 것은 인스턴스 객체를 생성하겠다는 의미!!

// 추상클래스는 그 자체만으로는 절대 인스턴스객체를 만들 수 없음!!!

// 반드시 추상클래스를 활용한 별도의 클래스 및 생성자함수를 통해서만 인스턴스 객체를 만들 수 있음!!!

// 자바스크립트를 객체 지향 프로그래밍 언어!! + C언어

// 프로세스를 개발하고자 할 때, 계속 객체라는 그룹핑을 시켜서 프로그램 코드 실행되도록 합니다!!

// <-> 절차 지향 프로그래밍

abstract class Developer {
  abstract coding(): void;
  drink(): void {
    console.log('drink sth');
  }
}

// const test = new Developer();

class FrontEndDeveloper extends Developer {
  coding(): void {
    console.log('develop web');
  }
  design(): void {
    console.log('design web');
  }
}

const josh = new FrontEndDeveloper();
josh.coding();
