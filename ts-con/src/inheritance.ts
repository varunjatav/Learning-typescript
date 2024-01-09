class Person {
    name: string;
    age: number;
    hobbies: string[];
    constructor(name: string, age: number, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies
    };
    greet(): string {
        return `Hello my name is ${this.name} and I am ${this.age} years old and my hobbies are ${this.hobbies.join(" & ")}`;
    }
};

class Student extends Person {
    grade:number;
    constructor(name: string, age: number, hobbies: string[], grade: number) {
        super(name,age, hobbies);
        this.grade = grade;
    }

    greet(): string {
        return `Hello my name is ${this.name} and I am ${this.age} years old and I am in ${this.grade} my hobbies are ${this.hobbies.join(" & ")}`;
    }
}
const person1:Person = new Person("Varun", 25, ["coding", "music"]);
const person2:Person = new Person("Rahul", 25, ["movies", "cricket"]);
const student1:Student = new Student("Vijay", 25, ["football", "reading"],10);
console.log(person1.greet());
console.log(person2.greet());
console.log(student1.greet());