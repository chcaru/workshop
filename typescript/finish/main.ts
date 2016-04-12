
"use strict";

// let someNumber = 42;
// someNumber = "42";

// let someNumber2: number;
// someNumber2 = 42;
// someNumber2 = "42";

// let someNumber3: number = "42";


// let someNumber = 42;
// let someString = "42";

// function double(x: number): string {
//     return x * 2;
// }

// let doubledNumber = double(someNumber);
// let doubledString = double(someString);

// let doubleString2: string = double(someNumber);


// interface ISomeObject {
//     someNumber: number;
//     someString: string;
//     someObject?: ISomeObject;
// }

// let someObject: ISomeObject = {
//     someNumber: "42",
//     someString: "42"
// };

// let emptyObject = { };

// someObject.someObject = emptyObject;


// interface IObjectWithFunction {
//     triple: (x: number) => number;
// }

// let someObject = {
//     triple: x => x * 3  
// } as IObjectWithFunction;

// let tripled = someObject.triple(3);
// let tripled2 = someObject.triple("3");

// let someObject2 = {
//     triple: x => x + " "  
// } as IObjectWithFunction;


// interface IAnimal {
//     speak();
// }

// abstract class Animal implements IAnimal {
//     abstract word(): string;
//     public speak() {
//         console.log(this.word());
//     }
// }

// class Dog extends Animal {
//     public word() {
//         return "bark";
//     }
// }

// class Cat extends Animal {
//     public word() {
//         return "meow";
//     }
// }

// let animals: IAnimal[] = [
//     new Dog(),
//     new Cat()  
// ];


// interface A {
//     a: number;
// };
// interface B {
//     b: string;
// };

// let c: A & B = {
//     a: 42,
//     b: "42"
// };

// let d: A | B = { a: 42 };
// let e: A | B = { b: "42" }
// let f: A | B = {
//     a: 42,
//     b: "42"
// };


// function throwBack<T>(x: T): T {
//     return x;
// }

// let someNumber = throwBack(42);
// let someString = throwBack("42");

// someNumber = throwBack("42");
// someString = throwBack(42);


// function fill<T>(x: T, n: number): T[] {
//     return new Array(n).fill(x);
// }

// let someList = fill("a", 5);

// someList.push("42");
// someList.push(42);


// interface IContainer<T> {
//     item: T;
// };

// function wrap<T>(x: T): IContainer<T> {
//     return {
//         item: x  
//     };
// }

// let wrapped = wrap(42);


// interface Dictionary<T> {
//     [key: string]: T
// }

// let votes: Dictionary<number> = {
//     "yes": 42,
//     "no": 21  
// };


// let counter = 0;

// async function delay(time: number) {
//     return new Promise(resolve => setTimeout(() => {
//         console.log("--delay", counter++);
//         resolve();   
//     }, time));
// }

// async function doStuff() {
//     console.log("doStuff start", counter++, "\n");
//     for (let i = 0; i < 5; i++) {
//         console.log("  before", i, counter++);
//         await delay(200);
//         console.log("  after", i, counter++, "\n");
//     }
//     console.log("doStuff finish", counter++);
// }

// console.log("start", counter++);
// doStuff();
// console.log("finish", counter++, "\n");


// let people = [

// ];

// function giveaway() {
//     let randomIndex = Math.random() * people.length;
//     let person = people.splice(randomIndex, 1)[0];
//     return person;
// }

// ;