import { mergeObjects } from './mergeObjects';

interface INameable {
  name: string;
}

const nameObj: INameable = {
  name: 'Jack',
};

interface IAgable {
  age: number;
}

const ageObj: IAgable = {
  age: 32,
};

const nameAndAge: INameable & IAgable = mergeObjects(nameObj, ageObj);

console.log(nameAndAge);
