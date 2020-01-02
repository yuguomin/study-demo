/** 
 * ES6关键字class声明类
 * class是的实现和寄生组合继承效果基本是一致的
 * 需要注意的是ES6和ES5的区别
 * 1. super和call 来继承构造函数属性时，call是创建子类实例去调用父类修饰；super是实现父类实例去装饰，没有子类this。
 * 2. class继承中，子类构造函数的__proto__会继承父类构造函数，因此，静态属性也可以继承到子类构造函数上。
 * 3. class声明会提升但是不会赋值，类似于let。
 * 4. class内部默认开启严格模式。
 * 5. class的所有方法（包括静态方法和实例方法）都是不可枚举的。
 * 6. class的所有方法（包括静态方法和实例方法）都没有原型对象 prototype，所以也没有`[[construct]]`，不能使用 new 来调用。
 * 7. class内部无法重写类名
 */

class SuperClass {
  constructor(age) {
    this.age = age;
    this.sayHi = function() {
      console.log('Hi');
    }
    this.lovefruits = ['orange', 'apple'];
  }
  sayAge() {
    console.log(`I am ${this.age} years old.`);
  }
  static sayHello() {
    console.log('Hello');
  };
}

class SubClass extends SuperClass {
  constructor(name, age) {
    super(age);
    this.name = name;
  }
  sayName() {
    console.log(`My name is ${this.name}.`);
  }
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

SubClass.sayHello(); // Hello