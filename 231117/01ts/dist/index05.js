function getName(o) {
    return o != undefined ? o.name : 'unknown name';
}
let n = getName(undefined);
console.log(n);
console.log(getName({ name: 'park' }));
function getAge(o) {
    return o != undefined && o.age ? o.age : 0;
}
console.log(getAge(undefined));
console.log(getAge(null));
console.log(getAge({ age: 32 }));
export {};
//# sourceMappingURL=index05.js.map