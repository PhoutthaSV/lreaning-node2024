//Number type
let age1 = 10;
// console.log(age);
let blue = 0x0000ff;
// console.log(blue);
let pi = 3.14159;
// console.log(pi);

// //String type
let fristName = 'Phoutthasone';
let lastName ='SOULIYAVONG';
// console.log(fristName + " " + lastName); //Phoutthasone SOULIYAVONG

// //Boolean type
let isReading = true;
let isSleeping = false;
// console.log(isReading);
// console.log(isSleeping);

// // NULL type
let car=null;
// console.log(car);

// //Undefined type
let x
// console.log(x); // Undefined

// // Symbol type
let sym1 = Symbol('foo');
// console.log(sym1) //Symbol(foo)\

// //Object type
let Obj = new Object();
Obj.make = 'Ford';
Obj.model = 'Mustang'
// console.log(Obj.make);

// //use case sample of \n
// console.log("Hello\nWord")

// //use case sample of \r
// console.log("Hello\rWord")

// //use case sample of \t
// console.log("Hello\tWord")

// //use case sample of \'and \""
// console.log('I\'m Phoutthasone') //I'm Phoutthasone
// console.log("I'm Phoutthasone") //I'm Phoutthasone

//use case sample of //
// console.log('C:\\Phoutthasone\\Files') //C:\Phoutthasone\Files

//use case of ${}
let name1 = 'phoutthasone'
let age2 = 18
// console.log(`Hello, my name is ${name} name I'm ${age1} years old.`)

var Obj1 = {
    name : 'Phoutthasone',
    age : 29,
    isMarried : true

}
// console.log(`Hello, my name is ${Obj1.name} name I'm ${Obj1.age} years old I'm ${Obj1.isMarried ? 'married' : 'not married'}.`)

//use case of Object Destructuring
let { name ,age, isMarried } = Obj1;
// console.log(`Hello, my name is ${name1} name I'm ${age2} years old I'm ${isMarried ? 'married' : 'not married'}.`)

//use case of array Destructuring
const arr=['phoutthasone',18,true]
const [name3,age3,isMarried3]=arr;
// console.log(`Hello, my name is ${name3} name I'm ${age3} years old I'm ${isMarried3 ? 'married' : 'not married'}.`)

//sample of spead operator
const arr2 =[1,2,3,4,5]
const arr3 =[6,7,8,9,10]
const arr4 =[...arr2,...arr3]
// console.log(arr4)
// sample of spread operator in case object
let obj1 = {name:'Phoutthasone',age : 18};
let obj2 = {width:55,height : 160};
const obj3 ={...obj1,...obj2}
// console.log(obj3)

const arr5 =[1,2,3,4,5]
const arr6 =[6,'a','b',9,10]
const obj =[{name : 'Jonh'},{name:'Jane'}]
const arr7 =[arr5,arr5]

console.log(arr5)
console.log(arr6)
console.log(obj)
console.log(arr7)
console.log(obj[1])



