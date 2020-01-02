/** 
 * 构造函数继承
 * 核心是在子类构造函数利用call方法执行父类构造函数，达到继承目的
 * 优点：解决了类式继承的几个问题
 * 1. 父类构造函数可以传参
 * 2. 修改子类实例原型上的属性后不会影响到其它子类实例
 * 缺点：
 * 1. 父类的原型没有继承。
 */

function SuperClass(age) {
  this.age = age;
  this.sayHi = function() {
    console.log('Hi~');
  }
  this.lovefruits = ['orange', 'apple'];
}

SuperClass.prototype.sayAge = function() {
  console.log(`I am ${this.age} years old`);
}

function SubClass(name, age) {
  this.name = name;
  SuperClass.call(this, age);
}

SubClass.prototype.sayName = function() {
  console.log(`My name is ${this.name}.`);
}

const person1 = new SubClass('ygm', 18);
person1.sayHi(); // Hi~
person1.sayName(); // My name is ygm.
// person1.sayAge(); // error
console.log(person1.age);
console.log(person1.lovefruits); // [ 'orange', 'apple' ]

const person2 = new SubClass('fish', 20);
person2.sayHi(); // Hi~
person2.sayName(); // My name is fish..
// person1.sayAge(); // error
console.log(person2.age);
console.log(person2.lovefruits); // [ 'orange', 'apple' ]

person1.lovefruits.push('durian');
console.log(person1.lovefruits); // [ 'orange', 'apple', 'durian' ]
console.log(person2.lovefruits); // [ 'orange', 'apple' ]


