// alert('Alert Message')
console.log('javascript console.log!!!');
// datatype
var amount = 1.1e5;
console.log(amount + 'this the number');
console.log(Number.MAX_VALUE + ' this is the max_value');
console.log(Number.MIN_VALUE + ' this is the min_value');
console.log(typeof amount);

var thisIsnull = null;
console.log(thisIsnull);
console.log(typeof thisIsnull);

//OBJECT
var age = 20;
console.log('Age = ' + age);
console.log(typeof age);
age = 'Im twenty yrs old';
console.log(typeof age);

// RELATIONAL (<, >, <=, >=, ==, !=, ===, !==) 
console.log('15 < 10 = ', 15 < 10);
console.log('15 <= 16 = ', 15 <= 16);
console.log('15 == "16" = ', 15 == "16");
console.log('15 != "16" = ', 15 != "16");
console.log('15 === "16" = ', 15 === "16");
console.log('15 !== "16" = ', 15 !== "16");

// LOGICAL / Boolean OPERATORS( !, ||, && )
console.log('!true = ', !true); //NOT
console.log('!5 = ', !5);
console.log('5==5 = ', 5 == 5);
console.log('"yes" || null =', "yes" || null); //OR
console.log('undefined || null =', undefined || null);
var userInput;
var value1 = userInput || 0;
console.log(value1);
console.log();
console.log('"" && 25 =', "" && 25);
console.log('undefined && false =', undefined && false);
//conditional operators
// variableName = booleanExpress ? truevalue : falsevalue
var a = 20, isTeen;
isTeen = a >= 15 ? 'Not' : 'Yes, or blow Teen';
console.log('isTeen : ', isTeen);

// compound operators
var aValue = 10, bValue = 20;
aValue += bValue; //this also using (-=, *=, /=, %=)
console.log('Total Value = ', aValue);

// If, If else - prompt, confirm, alert
// var age = prompt('what is your age ?',18);
// if(age < 18){
//     var parentPermission = confirm('i have my parentsPermission');
//     if(parentPermission){
//         alert('your are allowed for the roller coaster ride');
//     }
//     else{
//         alert('your are not allowed for roller coaster ride')
//     }
// }else{
//     alert('your are allowed for ride');
// }

//Do While
// do{
//     console.log("playing game...");
//     var continuPlaying = confirm ('continue playing..?')
// }while(continuPlaying);

// console.log('Game over!');

//for loop
// for(var dayInWeek = 1; dayInWeek <=7; dayInWeek++){
//     console.log('Day : ', dayInWeek);
// }
// console.log('No more weakdays!!');

//switch case
// var day = prompt('enter the day cont ');
// var day = 6;
// switch (true) {
//     case day > 0 && day < 6:
//         console.log('Working day! :(');
//         break;
//     case day === 6 || day === 7:
//         console.log('Holiday ! :)');
//         break;
//     default:
//         console.log('Enter the valid days');
//         break;
// }

// objects (primitive and object)
// var num1 = 10;
// var num2 = num1;
// var Obj1 = new Object;
// var Obj2 = new Object;
// var Obj3 = Obj1;

// num2 = 20;
// console.log('Num1 : ', num1);
// console.log('Num2 : ', num2);

// Obj1.newProp = 'object reference1';
// Obj2.newprop = 'By reference';
// console.log('Obj1 :', Obj1);
// console.log('Obj2 :', Obj2);
// console.log('Obj3 by Obj1 :', Obj3); 

//var obj = new Object(); //object constructor syntax
var user1 = new Object();
user1['first name'] = 'Sam';
user1.place = 'Salem';

user1.sayHi = function()
{
    console.log('Hi!, '+ user1["first name"]);
}
user1.sayHi();

//var obj1 = {}; //object literal syntax
var user2 = {
   ['first name'] : 'jaya',
    place : 'attur',
    sayHi : function(){
        console.log( "hello, " + user2["first name"]);
    }
}
user2.sayHi();

var userName = 'first name';
console.log(user2[userName]);

for (prop in user2){
    console.log(user2[prop]);
}

// var person = new Object();

// person.name = 'Name1';
// person.place = 'salem';

// console.log(person.name);
// console.log(person.place);

// person.sayHi = function() {
//     console.log('Hi!'+ person.name);
// }
// person.sayHi();

// get and set
// var procduct = {};

// Object.defineProperties(procduct, {
//     name:{
//         value: 'Book'
//     },
//     totalPrice:{
//         value:0,
//         writable: true
//     },
//     _offer:{
//         value: 0,
//         writable: true
//     },
//     offer: {
//         get: function(){
//             return this._offer;
//         },
//         set: function(newOffer){
//             if(newOffer <= 20 && this.totalPrice > 1000){
//                 this._offer = newOffer;
//             }
//         }
//     }
// })

// procduct.totalPrice = 2000;
// procduct.offer=15;

// console.log(procduct);
// console.log(procduct.offer);

// custom constructor using multiple objects in single line code

// function Employee(name, designation, salary) {
//     this.name = name;
//     this.designation = designation;
//     this.salary = salary;
// }

// var employe1 = new Employee('Revi', 'Testing Manager', 25000)
// console.log(employe1);
// var employe2 = new Employee('Pavi', 'Testing trainee', 22000)
// console.log(employe2);

// console.log(employe1 instanceof Employee);

// function SayHi(name, Message){
//     this.name = name;
//     this.Message = Message;
// }
// var user1 = new SayHi('ravi', 'how are you?')
// console.log(user1);

