
function sayHello(name){
    return `Hello ${name}`
}
console.log(sayHello('Phoutthasone'))

let sayHello2 = (name) => `Hello, ${name}`;

console.log(sayHello2('Phoutthasone'))

//Rest parameter
function getMyName(...arrs){
    return arrs.join(' ')
}
// console.log(getMyName('Jonh','Doe'))
// console.log(getMyName('Phoutthasone'))

// sample of default parameter
function getNum(a=1,b=2,c){
    console.log(a,b,c)
}
getNum()
getNum(2,3,5)