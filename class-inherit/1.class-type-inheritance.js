/** 
 * 类式继承
 * 核心就是把父类的实例作为子类的原型
 * SubClass.prototype = new SuperClass;
 * 优点：子类的实例都可以继承父类实例及原型上的属性和方法
 * 缺点：
 * 1. 所有子类实例共享一个原型(父类实例)，一旦一个子类修改了原型上的属性，其他子类实例也会受到影响。
 * 2. 由于共享一个父类实例做原型，如果父类是可以接收传参的构造函数，也没办法做区分。
 */

function SuperClass() {
  this.age = 18;
  this.lovefruits = ['orange', 'apple'];
  this.sayHi = () => {
    console.log('Hi~');
  }
}

function SubClass(name) {
  this.name = name;
}

SubClass.prototype = new SuperClass();
SubClass.prototype.constructor = SubClass;
SubClass.prototype.showName = function() {
  console.log(`My name is ${this.name}.`);
}
SuperClass.prototype.showAge = function() {
  console.log(`I am ${this.age} years old.`);
}

const person = new SubClass('ygm');
person.sayHi(); // Hi~
person.showName(); // My name is ygm.
person.showAge(); // I am 18 years old.
console.log(person.lovefruits); // [ 'orange', 'apple' ]

const person1 = new SubClass('Fish');
person1.sayHi(); // Hi~
person1.showName(); // My name is Fish.
person1.showAge(); // I am 18 years old.
console.log(person1.lovefruits); // [ 'orange', 'apple' ]

person.lovefruits.push('durian');
console.log(person.lovefruits); // 'orange', 'apple', 'durian' ]
console.log(person1.lovefruits); // 'orange', 'apple', 'durian' ]