// ATTENTION: THIS IS CODE FROM THE YOUTUBE CRASH COURSE. IT IS NOT MEANT TO RUN, IT IS JUST FOR LEARNING PURPOSES //

// LOGGING OUTPUT
alert('Hello World'); // Do not use for debugging. Stops script and only strings
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');


// VARIABLES - var, let, const
let age = 30;

// let can be re-assigned, const can not
age = 31;


// DATA TYPES - String, Number, Boolean, null, undefined
const name = 'Brad';
const age = 37;
const rating = 3.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // undefined

// Check type
console.log(typeof z);

// String, Numbers, Boolean, null, underfined

const name = 'John';
const age = 30;


//Concatenation
console.log('My name is ' + name + ' and I am ' + age);
//Template String
console.log(`My name is ${name} and I am ${age}`);
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

const s = 'Hello World!';
console.log(s.length);
console.log(s.toLowerCase());
console.log(s.substring(0,4).toUpperCase());
console.log(s.split(''))

const ss = 'technology, computers, it, code';
console.log(ss.split(', '));


// Arrays - variables that hold multiple values

/* multi
line
comment */

const numbersA = new Array(1,2,3,4,5);
console.log(numbersA);

const numbersB = new Array('1,2,3,4,5');
console.log(numbersB);

// const fruits = ['apples','oranges','pears',10,true];
const fruits = ['apples','oranges','pears'];

fruits[3] = 'grapes'

console.log(fruits[3]);

fruits.push('mangos');

fruits.unshift('strawberries');

fruits.pop();

console.log(Array.isArray(fruits));
console.log(Array.isArray('fruits'));

console.log(fruits.indexOf('oranges'));

console.log(fruits);


const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
         street: '50 main st',
         city:'Boston',
         state: 'MA'
    }
}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const { firstName, lastName, address:{ city }} = person;

console.log(firstName);
console.log(city);

person.email = 'john@gmail.com';

console.log(person);

const todos =[
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
]

console.log(todos);
console.log(todos[1].text);
console.log(todos);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// FOR
for(let i = 0; i <= 10; i++ ){
    console.log(i);
    console.log(`For Loop Number: ${i}`);
}

// WHILE
let i = 0;
while(i < 10){
    console.log(`For Loop Number: ${i}`);
    i++;
}

////
for(let i = 0; i < todos.length; i++ ){
    console.log(todos[i].text);
}

for(let todo of todos){
    console.log(todo.id);
}

// forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text);
});

todos.forEach((todo) => console.log(todo));

const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

const todoCompletedA = todos.filter(function(todo){
    return todo.isCompleted  === true;
});
console.log(todoCompletedA);

const todoCompletedB = todos.filter(function(todo){
    return todo.isCompleted  === true;
}).map(function(todo){
    return todo.text;
});
console.log(todoCompletedB);

const x = 10;
if(x == 10){
    console.log('x is 10');
}else{
    console.log('x is NOT 10');
}

const y = '10';
if(y == 10){
    console.log('y is 10');
}else{
    console.log('y is NOT 10');
}

const z = '10';
if(z === 10){
    console.log('z is 10');
}else{
    console.log('z is NOT 10');
}

const xx = 20;
if(xx == 10){
    console.log('x is 10');
}else if(xx > 10){
    console.log('x is great than 10');
}else{
    console.log('x is less than 10');
}

const xxx = 10;

const color = xxx > 10 ? 'red' : "blue";

console.log(color);

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}



function addNumsA(num1, num2){
    console.log(num1 + num2);
}

addNumsA(5,4);
addNumsA();


function addNumsB(num1 = 1, num2 = 1){
    console.log(num1 + num2);
}

addNumsB(5,4);
addNumsB();


function addNumsC(num1 = 1, num2 = 1){
    return num1 + num2;
}

addNumsC(5,4);
addNumsC();

console.log(addNumsC(5,4));
console.log(addNumsC());

// type 1
const addNumsD = (num1 = 1, num2 = 1) => {
    return num1 + num2;
}
console.log(addNumsD(5,5));

//type 2
const addNumsE = (num1 = 1, num2 = 1) => {
    console.log(num1 + num2);
}
addNumsE(5,5);

//type 3
const addNumsF = (num1 = 1, num2 = 1) => console.log(num1 + num2);
addNumsF(5,5);

// type 4
const addNumsG = (num1 = 1, num2 = 1) => num1 + num2;
console.log(addNumsG(5,5));



// Constructor function A
function PersonA(firstName,lastName, dob){
    this.firstName =firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiate object
const person1 = new PersonA('John','Doe','4-3-1980');
const person2 = new PersonA('Mary','Smith','3-6-1970');

console.log(person1);
console.log(person2.firstName);
console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());

// Constructor function B
function PersonB(firstName,lastName, dob){
    this.firstName =firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

PersonB.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

PersonB.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

//Instantiate object
const person3 = new PersonB('John','Doe','4-3-1980');
const person4 = new PersonB('Mary','Smith','3-6-1970');

console.log(person4.getFullName());
console.log(person3);

// Class C
class PersonC {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiate object
const person5 = new PersonB('John','Doe','4-3-1980');
const person6 = new PersonB('Mary','Smith','3-6-1970');

console.log(person6.getFullName());
console.log(person5);


















































