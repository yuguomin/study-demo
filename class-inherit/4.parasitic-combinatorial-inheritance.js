/**
 * 寄生组合继承
 * 核心：同样利用构造函数式继承来继承父类上的属性，用一个对象副本来做原型继承父类原型
 * 优点：
 * 1. 保证了父类的属性和原型的属性都继承
 * 2. 父类没有创建两次，并且用一个空对象作为子类实例的原型，不会有组合继承重复属性
 * 缺点：
 * 1. 原型的修改会影响到所有子类实例
 */

function inheritObject(obj) {
  const fn = function () { }
  fn.prototype = obj;
  return new fn();
}

function inheritPrototype(subClass, superClass) {
  const prot = inheritObject(superClass.prototype);
  prot.constructor = subClass;
  subClass.prototype = prot;
}

function SuperClass(age) {
  this.age = age;
  this.sayHi = function() {
    console.log('Hi~');
  }
  this.lovefruits = ['orange', 'apple'];
}

SuperClass.prototype.sayAge = function() {
  console.log(`I am ${this.age} years old.`);
}

function SubClass(name, age) {
  this.name = name;
  SuperClass.call(this, age);
}

inheritPrototype(SubClass, SuperClass);
SubClass.prototype.sayName = function() {
  console.log(`My name is ${this.name}.`);
}

const person1 = new SubClass('ygm', 18);
person1.sayHi(); // Hi~
person1.sayName(); // My name is ygm.
person1.sayAge(); // I am 18 years old.
console.log(person1.lovefruits); // [ 'orange', 'apple' ]

const person2 = new SubClass('fish', 20);
person2.sayHi(); // Hi~
person2.sayName(); // My name is fish.
person2.sayAge(); // I am 20 years old.
console.log(person2.lovefruits); // [ 'orange', 'apple' ]

person1.lovefruits.push('durian');
console.log(person1.lovefruits); // [ 'orange', 'apple', 'durian' ]
console.log(person2.lovefruits); // [ 'orange', 'apple' ]