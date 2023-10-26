class Pet {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  run() {
    alert(`${this.name} is running!`);
  }
}

class Cat extends Pet {
  constructor(name, color, breed) {
    super(name, color);
    this.breed = breed;
  }

  viewInfo() {
    alert(`이름 : ${this.name}, 품종 : ${this.breed}, 색상 : ${this.color}`);
  }
}

const cheez = new Pet("치즈", "노란색");
cheez.run();

const bori = new Cat("야옹이", "흰색", "코숏");
bori.viewInfo();
