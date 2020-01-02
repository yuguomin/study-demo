/** 
 * 组合继承
 * 核心是组合使用前面的类式继承和构造函数式继承
 * 优点：
 * 1. 解决了不能构造函数继承不能解决父类原型属性继承的问题
 * 缺点：
 * 1. 父类会调用两次
 * 2. 在子类实例上有父类属性上挂载的属性，其原型上还有一份
 */

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

SubClass.prototype = new SuperClass();
SubClass.prototype.constructor = SubClass;
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
