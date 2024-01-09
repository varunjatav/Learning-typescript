"use strict";
class Person {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    ;
    greet() {
        return `Hello my name is ${this.name} and I am ${this.age} years old and my hobbies are ${this.hobbies.join(" & ")}`;
    }
}
;
class Student extends Person {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    greet() {
        return `Hello my name is ${this.name} and I am ${this.age} years old and I am in ${this.grade} my hobbies are ${this.hobbies.join(" & ")}`;
    }
}
const person1 = new Person("Varun", 25, ["coding", "music"]);
const person2 = new Person("Rahul", 25, ["movies", "cricket"]);
const student1 = new Student("Vijay", 25, ["football", "reading"], 10);
console.log(person1.greet());
console.log(person2.greet());
console.log(student1.greet());
