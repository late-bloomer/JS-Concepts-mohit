



/**
 * For React Project- visit https://codesandbox.io/u/mohit2407
 */



/******************** Start: Hoisting var,let & function (V.Imp) *****************/
// greetings(1); // gives error; greetings is not a function

// var greetings = function (i) {
//   console.log("first greeting", i);
// };
// greetings(2);

// function greetings(i) {
//   console.log("second greetings", i);
// }
// greetings(3);

/**
 *
 * "var" is hoisted but not it's assigned value, so that's why it is giving undefined.
 * but in-case of "let" & "const", Uncaught ReferenceError: Cannot access 'greet'
 * before initialization.
 *
 */
// console.log(greet); // undefined
// var greet = 4;
// console.log(greet); // 4
// var greet = 5; // It will work.
// console.log(greet); // 5

// console.log(greed); // Uncaught ReferenceError
// let greed = 4;
// console.log(greed);
// let greed = 5; // It won't work and gives error as greed in already defined.
// console.log(greed);

//--------------------
// var xyz = "global";
// function printXyz(){
//     console.log(xyz);
//     var xyz = "local" // "variable shadowing" concept
// }
// printXyz() // output: undefined

//----------------------
// function xyz() {
//     var a = "person"
// }
// xyz();
// console.log(a); // error

//-------------------
// let a ="l"
// function xyz() {
//     var a = "person"
//     console.log(a);
// }
// xyz();
// console.log(a);
//---------------
// var a ="l"
// function xyz() {
//     var a = "person"
//     console.log(a);
// }
// xyz();
// console.log(a);
//------------------
// var a ="l"
// function xyz() {
//     let a = "person"
//     console.log(a);
// }
// xyz();
// console.log(a);

//-----------------------
// (function timer() {
//   // it will print 6 , 6 times
//   for (var i = 0; i <= 5; i++) {
//     setTimeout(function clog() {
//       console.log(i);
//     }, i * 1000);
//   }
// })();
// (function timer2() {
//   // it will print 0,1,2,3,4,5 each time as we are using "let"
//   for (let i = 0; i <= 5; i++) {
//     setTimeout(function clog() {
//       console.log(i);
//     }, i * 1000);
//   }
// })();
// (function timer3() {
//   // it will print 0,1,2,3,4,5 each time despite of using "var"
//   for (var i = 0; i <= 5; i++) {
//     (function (i) {
//       setTimeout(function clog() {
//         console.log(i);
//       }, i * 1000);
//     })(i);
//   }
// })();
// (function timer4() {
//     // it will print 0,1,2,3,4,5 each time despite of using "var"
//     for (var i = 0; i <= 5; i++) {
//       let q = i; // closure....
//       (function (q) {
//         setTimeout(function clog() {
//           console.log(q);
//         }, q * 1000);
//       })(q);
//     }
//   })();

/*************** Start: Hoisting var,let & function (V.Imp) ******************/

// ************************ Start : func declaration .. func statement ******************
// ..........read about how normal function and func expression hoisted...........
// function abc(){
//     console.log("abc hi");
// }

/**
 * function declaration is hoisted but not function expression.
 */

// ************************ End : func declaration .. func statement ******************

// ************************ Start : func expression *********************

// var xyz = function(){
//     console.log("xyz");
// }

// ************************ End : func expression *********************

//*************************** Start : pure function *****************************

// A pure function is a function which:
// 1. Given the same input, always returns the same output.
// 2. Produces no side effects, which means that it can’t alter any external state.

//  function pure(a,b){
//      return a+b;
//  }
//console.log(pure(1,2));

//*************************** End : pure function ***************************

//*************************** Start : impure function *****************************

// Impure functions give different outcomes when we pass the same arguments multiple times.

// var x = 3;
//  function impure(a,b){
//      a = a+x // producing the differnt output based upon external factor.
//      return a+b;
//  }
//console.log(impure(1,2));

/***

Let’s compare and contrast the differences between pure and impure functions:

1. Pure functions do not have side effects. Impure functions can cause side effects.
2. Pure functions return the same output if we use the same input parameters. However, impure
   functions give different outcomes when we pass the same arguments multiple times.
3. Pure functions always return some results. Impure functions can execute without producing
   anything.
4. Debugging pure functions is relatively easier than debugging impure functions.
5. IMP: Pure functions cannot execute AJAX calls or standard DOM manipulation.

***/

//*************************** End : impure function ***************************

// ******************** Start : normal function execution ******************

//  var arr = [1,2,3,4,5]
//  function areaOfCircle(arr=[]){
//      let temp = []
//      arr.forEach((item)=>{
//        temp.push(Math.PI * item * item)
//      })
//      return temp
//  }
//  function circumCircle(arr=[]){
//     let temp = []
//     arr.forEach((item)=>{
//       temp.push(2 * Math.PI * item )
//     })
//     return temp
// }

// function diaCircle(arr=[]){
//     let temp = []
//     arr.forEach((item)=>{
//       temp.push(2 * item )
//     })
//     return temp
// }
//  console.log(areaOfCircle(arr));
//  console.log(circumCircle(arr));
//  console.log(diaCircle(arr));

// ******************** End : normal function execution ******************

// ************** Start: HOF[Higher Order Function] function execution ***************
/**
 * Basically, a function which takes another function as an argument or returns a function
 * is known as a higher order function.
 *
 * HOF is first class function
 */

//  var arr2 = [1,2,3,4,5]
// function areaOfCircle2(val){         // pure function
//     return Math.PI * val * val
// }
// function circumCircle2(val){         // pure function
//    return 2 * Math.PI * val
// }

// function diaCircle2(val){            // pure fucntion
//     return 2 * val
// }

//  function circleFunction(exeFun, arr){   // HOF
//     let temp = []
//     arr.forEach((item)=>{
//       temp.push(exeFun(item))
//     })
//     return temp
//  }

//  console.log(circleFunction(areaOfCircle2, arr2));
//  console.log(circleFunction(circumCircle2, arr2));
//  console.log(circleFunction(diaCircle2, arr2));

// ******************************** End: HOF function execution ******************

//**************************** Start:  "this" in JS *******************************
/**
 * 1. Default "this" binding.
 * 2. Implicit "this" binding. // based on where it is defined.
 * 3. Explicit "this" binding.
 * 4. New "this" Binding.
 */
// var obj = {
//   firstName: "Mohit",
//   lastName: "Sharma",
//   fullName: function () {
//     function inner() {
//       // Implicit "this" binding
//       console.log(`Full Name is ${this.firstName} ${this.lastName}`);
//     }
//     let inner2 = () => { // Implicit "this" binding
//       console.log(`Full Name is ${this.firstName} ${this.lastName}`);
//     };
//     console.log(this); // current "obj" object
//     console.log(`Full Name is ${this.firstName} ${this.lastName}`); // Full Name is Mohit Sharma
//     inner(); // Full Name is Rahul Dravid
//     inner2(); // Full Name is Mohit Sharma

// /**
//  *     Below - Full Name is Mohit Sharma {for not loosing 'this' of current object.
//  *     [Explicit "this" binding]}
//  */
//     inner.bind(this)();  // Explicit "this" binding
//   },
// };

// var firstName = "Rahul";
// var lastName = "Dravid";

// obj.fullName();
// console.log(obj);

// console.log(`first name is ${this.firstName}`); // first name is Rahul.

// function printFName() {
//   // Default "this" binding
//   console.log(`first name is ${this.firstName} inside printFName`);
// }

// printFName(); // first name is Rahul inside printFName.

// var myObj = {
//     firstName: "Sachin"
// };

// printFName.bind(myObj)(); // first name is Sachin inside printFName.

// function Video(title){ // constructor function
//     this.title = title // New "this" Binding because constructor function invoke from "new" keyword
//     console.log("Movie is ", this.title);
//     console.log("video obj", this);
// };

// /* constructor function new Video() create new empty obj {} */
// let video = new Video("Stowaway"); // print - Movie is Stowaway and Video{title: "Stowaway"}

// console.log(video); // video obj (Video{title: "Stowaway"})
// console.log(video.title); //Stowaway
// console.log(this.title); //undefined because title isn't defined in global but inside video obj

// let func = new Function('a', 'b', 'return a+b') // new Function([arg1, arg2,...,argN], function Body)
// /**
//  * new Function() creates a function(anonymous func) but constructor function new Video() creates
//  * empty obj {}.
//  */

// console.log("new Function example: ",func(1,2))
// console.log("new Function:",new Function())//function definition of anonymous func
// /**
//  * new Function: ƒ anonymous() { }
//  */
// console.log("new Function:",func) //function definition
// /**
//  * new Function: ƒ anonymous(a,b) { return a+b}
//  */

//************************************** END:  This in JS ********************************

/***************************************** Start: Closure  ********************************/

/**
 * A closure is the combination of a function and the lexical environment within
 * which that function was defined and declared. This environment consists of any local
 * variables that were in-scope at the time the closure was created.
 * In this case, "myFunc" is a reference to the instance of the function
 * "displayName" that is created when "makeFunc" is run.
 * The instance of "displayName" maintains a reference to its lexical environment,
 * within which the variable name exists. For this reason,
 * when "myFunc" is invoked, the variable name remains available for use,
 * and "Mozilla" is passed to alert.
 */

// function makeFunc() {
// var name = 'Mozilla';
// function displayName() {
//     alert(name);
// }
// return displayName;
// }

// var myFunc = makeFunc();
// myFunc();

// function testClosure(){
//     let count=0
//     return function innerFunClo(val){
//         if(val==='inc') count = count+1;
//         else count = count-1;
//         console.log("count...",count);
//     }
// }

// var counter = testClosure()
// counter("inc")
// counter("decre")
// counter("inc")
// counter("inc")
// counter("decre")

// var C;
// var A = function () {
//   var b = 10;
//   C = function () {
//     console.log(b);
//   };
// };
// console.log(C); // undefined
// C(); // C is not a function because we didn't execute A() till now.
// A(); // no result
// C(); // 10 because "function C" and "var b" makes the closure env.

/************************************* End: Closure  *********************************/

/*********** Start: Web API, Event Loop, Microtask Queue, Call Queue  *************/

//var aa = 1
//console.log("aa",aa)
// function delay(){
//     setTimeout(()=>{
//       console.log("print after millions of code");
//     }, 500)
// }
// delay()
// console.log("u will die")
// // millions of code // waiting for sometime
// for(let i=0 ; i<1500 ; i++){
//     console.log("hi wait");
// }
// console.log("jack");

/******************* End: Web API, Event Loop, MQ, Call Queue  *****************/

/*************** Start: var, this and window point to same global variable  ***************/

// "use strict"; // better not to use frequently
// this.table = "window";
// var table = "another window";
// table = "other window";
// console.log("table....",this.table); // other window
// function myTable(){
//   console.log("table....myTable..",this.table);
// }
// var myTable2= ()=> {
//   console.log("table....myTable2..",this.table);
// }

/*  Below:-
    Can not read property 'table' of undefined because of 'use strict' otherwise it will print
    "table....myTable..other window" (remove 'use strict' and try)......
    In short, in 'use strict' mode, 'this' used inside normal function(function abc(){} (or)
    let abc = function(){}) can't access global window obj using 'this', so error occurs and
    it is necessary to bind that function with 'this' obj to get outer 'this' inside the
    function. For get rid of this complexity, we can use arrow/fat arrow function.
*/
// myTable()
// myTable.call(this)

/* But in "use strict" this.table points to table variable in the window "obj" inside arrow
 * func but not in normal function like myTable() but if you remove "use strict" it behaves
 * the same.
 */
// myTable2()

// function MyFirstConstructorFun(title) {
//   this.title = title;
//   this.table = title;
//   console.log("this.title....MyFirstConstructorFun..", this.title);
//   console.log("this.table....MyFirstConstructorFun..", this.table);
// }
// var icon = new MyFirstConstructorFun("icon"); // new keyword convert function to constructor function
// MyFirstConstructorFun("icon"); // It will behave as normal function

// /**
//  * In-Case of 'use strict' we have bind with outer 'this' to access and change the table
//  * variable and create a 'title' variable to outer or global scope.
//  */
// MyFirstConstructorFun.call(this,"icon")
// console.log("table....",this.table);

// /**
//  * 'undefined' because this.title is defined inside MyFirstConstructorFun
//  * and if MyFirstConstructorFun is called as constructor function then it will
//  * undefined and if called as normal function then this.title gives "icon"
//  */
// console.log("title....", this.title); // undefined if MyFirstConstructorFun is constructor function

//*************** Start: Arrow function *******************

/*
  1. Does not have it's own bindings to "this" or "super", and should not be used as
     methods(function defined inside the object).
  2. Does not have "new.target" keywords.
  3. Not suitable for "call", "apply" and "bind" methods, which is generally rely on
     establishing a scope.
  4. Can not be used as "Constructors".
  5. Can not use "yield" within it's body.
*/

// var customer = {
//     fullName: "Arjun Tendulkar",
//     area: "Mumbai",
//     country: "India",
//     custDetails(){
//         console.log(`${this.fullName} is a resident of ${this.area} ${this.country}.`);
//     },

// /**
//  * "this" in arrow function always points to nearest parent's object inside object's
//  * method or otherwise points to global or window object
//  */

//     custDetails2: function(){
//         return function(){
//             console.log(`${this.fullName} is a resident of ${this.area} ${this.country}.`);
//         } // normal function so this point to window or global
//     },

//     custDetails3: ()=>{
//         console.log(`${this.fullName} is a resident of ${this.area} ${this.country}.`);
//     },// arrow function shouldn't use as method as 'this' points to global

//     custDetails4: function(){
//         return ()=>{
//             console.log(`${this.fullName} is a resident of ${this.area} ${this.country}.`);
//         }  // "this" pointing to customer object
//     },
//     custDetails5:()=>{
//         return ()=>{
//             console.log(`${this.fullName} is a resident of ${this.area} ${this.country}.`);
//         }
//     }, // arrow function shouldn't use as method as 'this' points to global
// }
// customer.custDetails() // Arjun Tendulkar is a resident of Mumbai India.
// customer.custDetails2()() // undefined is a resident of undefined undefined.
// customer.custDetails3() // undefined is a resident of undefined undefined.
// customer.custDetails4()() // Arjun Tendulkar is a resident of Mumbai India.
// let fn1 = customer.custDetails4()
// fn1(); // Arjun Tendulkar is a resident of Mumbai India.
// customer.custDetails5()() // undefined is a resident of undefined undefined.
// let fn2 = customer.custDetails5()
// fn2(); // undefined is a resident of undefined undefined.

// var itemA = "Asset"

// function printItemA(){
//     console.log("itemA is ",this.itemA);
// } // normal function
// printItemA()

// var printItemB = () => {
//     console.log("itemB is ",this.itemA);
// } // arrow function
// printItemB()

//***************  End: Arrow function *******************

/*************** End: var, this and window point to same global variable  ***************/

/************************* Start: Map, Reduce, Filter & Find *********************/
//  let arr = [1,2,3,4,5];

//  arr.forEach((item,index)=>{
//      console.log(`item is ${item} and index is ${index}`);
//      arr[index]++
//  })

//  console.log(arr);

//  var myMapArr = arr.map((item,index)=>item*2)
//  console.log(arr)
//  console.log(myMapArr)

//  var myFilter = arr.filter((item,index)=>item<4)
//  console.log(arr)
//  console.log(myFilter)

//  /**
//   * here null as argument in reducer, is initial value of result, so when condition is 
//   * not satisfied then initial value will be return...
//   */
//  var myReduce = arr.reduce((result, item)=>{
//      if(item === 66){
//         result =  "excellient"
//      }
//      return result;
//  }, null)
//  console.log(arr)
//  console.log(myReduce)

//  /**
//   * find returns the first item in the array that satisfies a condition
//   */
//  var myFind = arr.find((item,index)=>item<4)
//  console.log(arr)
//  console.log(myFind)

/************************* End: Map, Reduce, Filter & Find *********************/

/**************** Start: call, apply & bind ****************/

/*
  "call", "apply" and "bind" are used to bind the particular object or particular "this"
  to the function
*/

// var completeDetails = {
//     firstName: "Hakkuna",
//     lastName: "Matata",
//     address: "Masayi-Mara Jungle",
//     printCompleteDetails: function(){
//         console.log(`${this.firstName} ${this.lastName} lives in ${this.address}.`);
//     }
// }
// completeDetails.printCompleteDetails() // Hakkuna Matata lives in Masayi-Mara Jungle.

// var completeDetails2 = {
//     firstName: "Sachin",
//     lastName: "Sharma",
//     address: "Mumbai",
// }

// var completeDetails3 = {
//     firstName: "Mohit",
//     lastName: "Sharma",
// }

// function details(address){
//     console.log(`${this.firstName} ${this.lastName} lives in ${address}.`);
// }

// function details2(param1, param2){
//     console.log(`${this.firstName} ${this.lastName} lives in ${param1}, ${param2}.`);
// }

/* "bind" always return one function bind with "this" or object passed inside it.
    It can take arugment in "bind".
    write "completeDetails.printCompleteDetails.bind(completeDetails2)" only wont print
    anything. for printing, use like this
    "completeDetails.printCompleteDetails.bind(completeDetails2)()"
*/
// var newFunction = completeDetails.printCompleteDetails.bind(completeDetails2)
// newFunction() // Sachin Sharma lives in Mumbai.

// var newFunction2 = details.bind(completeDetails3, "Kolkata")
// newFunction2() // Mohit Sharma lives in Kolkata.

// var newFunction22 = details.bind(completeDetails3)
// newFunction22("Kolkata") // Mohit Sharma lives in Kolkata.

// var newFunction3 = details2.bind(completeDetails3, "Bose colony", "Kolkata")
// newFunction3() // Mohit Sharma lives in Bose colony, Kolkata.

// var newFunction4 = details2.bind(completeDetails3, "Bose colony")
// newFunction4("Kolkata") // Mohit Sharma lives in Bose colony, Kolkata.

// var newFunction5 = details2.bind(completeDetails3)
// newFunction5("Bose colony","Kolkata") // Mohit Sharma lives in Bose colony, Kolkata.

/*
   "call" takes object or "this" along with aruments.
   fn.call((obj or "this"), arg1, arg2, .... ,argN)
   passing argument is optional and you can't pass array as argument
*/
/**
 * function borrowing concept - Function borrowing allows us to use the methods of one object
 * on a different object without having to make a copy of that method and maintain it in
 * two separate places. It is accomplished through the use of .call(), .apply(), or .bind(),
 * all of which exist to explicitly set this on the method we are borrowing.
 */
// completeDetails.printCompleteDetails.call(completeDetails2) // Sachin Sharma lives in Mumbai.

// details.call(completeDetails3, "Bangalore") // Mohit Sharma lives in Bangalore.
// details.call(completeDetails2, "Bangalore") // Sachin Sharma lives in Bangalore.

/*
   "apply" takes object or "this" along with aruments.
   fn.apply((obj or "this"), [arg1, arg2, .... ,argN])
   passing argument is optional and you must pass array as argument
*/
// completeDetails.printCompleteDetails.apply(completeDetails2) // Sachin Sharma lives in Mumbai.

// var completeDetails4 = {
//     firstName: "Rohit",
//     lastName: "Saini",
// }

// details2.apply(completeDetails4, ["Hebbal","Bangalore"]) // Rohit Saini lives in Hebbal, Bangalore.
// details.apply(completeDetails4, ["Hebbal","Bangalore"]) // Rohit Saini lives in Hebbal.

// /**
//  * In arrow functions, this retains the value of the enclosing lexical context's
//  * this. In global code, it will be set to the global object:
// */

// var globalObject = this;
// var foo = (() => this);
// console.log(foo() === globalObject); // true
// /**
//  * Note: If "this" arg is passed to call, bind, or apply then on
//  * invocation of an arrow function it will be ignored. You can still prepend
//  * arguments to the call, but the first argument (this) would be set to null.
//  */

// // Call as a method of an object
// var obj = {func: foo};
// console.log(obj.func() === globalObject); // true

// // Attempt to set this using call
// console.log(foo.call(obj) === globalObject); // true

// // Attempt to set this using bind
// foo = foo.bind(obj);
// console.log(foo() === globalObject); // true
// /**
//  * No matter what, foo's "this" is set to what it was when it was created
//  * (in the example above, the global object). The same applies to arrow functions
//  * created inside other functions: their this remains that of the enclosing
//  * lexical context.
// */

/****************** End: call, apply & bind **********************/

/************  Start: Partial Function & Curring Function  ************/

/***** Partial Function ********/
/***** Look at this example ****/

// function multiply(item1, item2){
//     return item1 * item2;
// }

// let double = multiply.bind(null, 2);
// console.log(double(3)); // 6
// console.log(double(4)); // 8

// let triple = multiply.bind(null, 3);
// console.log(triple(3)); // 9
// console.log(triple(4)); // 12

/*
    So, In partial function, we create a new function by fixing some parameter in existing
    function.
    and benefit is that we can create an independent function with a readable name like
    double, triple.
    we can use it and don't write the first arugment of everytime, as it is fixed with bind.
*/

/***** Curring Function ********/
/***** Look at this example ****/

/*
   Curring is translating a function from callable as f(a, b, c) into callable
   as f(a)(b)(c)
*/

// function add(a){
//     return function (b) {
//         return function (c) {
//             return a+b+c;
//         }
//     }
// }

// console.log(add(1)(2)(3)); //6

/************  End: Partial Function & Curring Function  **************/

/***************** Start: Polyfills ***********************/

/*  Polyfills are browser's fallback i.e: any kind of new implementations or features of
    ES6 which doesn't support by older version of browser, so we have to provide the definition
    of that feature externally. ex: if "bind" won't support by any browser or it's version
    so we have to provide our custom "bind" feature to browser so it can perform same action.
*/
/* polfills for "bind" */

// var detailsObject = {
//     firstName: "Mohit",
//     lastName: "Sharma"
// }

// function printingAllDetails(homeTown, state, country){
//     console.log(`${this.firstName} ${this.lastName} lives in ${homeTown}, ${state}, ${country}`);
// }

// Function.prototype.customBind = function(...args){
//     let _this = this // "this" will point to printingAllDetails()
//     let currObject = args[0] // it will point to detailsObject
//     let restItems = args.slice(1) // it will contain rest of the params of customBind like "siwan"

//     /* return func will contain params of printing2() like "Bihar", "India"*/
//     return function(...args2){ // it will point to printing2()
//         _this.apply(currObject, [...restItems, ...args2])
//     }
// }

//var printing1 = printingAllDetails.bind(detailsObject, "Siwan")
//printing1("Bihar", "India")// Mohit Sharma lives in Siwan, Bihar, India

//var printing2 = printingAllDetails.customBind(detailsObject, "Siwan")
//printing2("Bihar", "India")// Mohit Sharma lives in Siwan, Bihar, India

//------------ Start: Pollyfills for map function -------
// var arr = [1,2,3,4];
// var arr1 = arr.map((item)=>item*2)
// console.log("arr1...",arr1);

// Array.prototype.myCustMap = function(callback){
//     const _custArr = this;
//     let tempArr=[]
//     for(let i=0 ; i<_custArr.length ;i++){
//     tempArr.push(callback(_custArr[i]))
//     }
//     return tempArr
// }

// var arr2 = arr.myCustMap((item)=>item*3)
// console.log("arr2...",arr2);
//------------ End: Pollyfills for map function -------

//------------ Start: Pollyfills for Reduce function -------

// var arr = [1, 2, 3, 4, 5];
// var myReduce = arr.reduce((result, item) => {
//   return item + result;
// }, 0);
// var myReduce2 = arr.reduce((result, item) => {
//   return item + result;
// }, 15);
// console.log(arr);
// console.log(myReduce);
// console.log(myReduce2);
// Array.prototype.customReduce = function (callback, start) {
// --------- Imp: always use normal function but not a arrow function otherwise inner "this"
// will point to global and you will get "undefined" --------
// const tempArr = this;
// let i = start !== undefined && start !== null ? 0 : 1;
// let result = start !== undefined && start !== null ? start : tempArr[0];
// for (; i < tempArr.length; i++) {
//   result = callback(result, tempArr[i]);
// }
// return result;
// };

// var myReduce3 = arr.customReduce((result, item) => {
//   return item + result;
// }, 0);
// console.log(arr);
// console.log(myReduce3);

// var myReduce4 = arr.customReduce((result, item) => {
//   return item + result;
// }, 15);
// console.log(arr);
// console.log(myReduce4);

// var myCustReducer123 = arr.customReduce((result, itm) => {
//     return itm + result;
// });
// console.log(arr);
// console.log(myCustReducer123);

/**
 * Important !!!!!
 * Below is pollyfills of "reduce" with call function. Kindly see....
 */

// Array.prototype.myReduce = function (callback, first) {
//     const currArr = this;
//     let result;
//     if (currArr.length > 0) {
//         result = first || currArr[0];
//         let i = first ? 0 : 1
//         for (; i < currArr.length; i++) {
//             result = callback(result, currArr[i])
//         }

//     }
//     return result;

// }

// var arr = [1, 2, 3, 4, 5]

// var val1 = arr.reduce((result, item) => {
//     result = result + item
//     return result;
// }, 0)

// console.log(val1);

// var val2 = arr.myReduce((result, item) => {
//     result = result + item
//     return result;
// }, 0)

// console.log(val2);


// var val3 = arr.reduce.call([15, 16, 17currLevel], (result, item) => {
//     result = result + item;
//     return result
// })

// console.log(val3);

// var val4 = arr.myReduce.call([15, 16, 17], (result, item) => {
//     result = result + item;
//     return result
// })

// console.log(val4);

//---------- End: Pollyfills for Reduce function --------

//--------- Start: Pollyfills for filter & find function -------

// var arr = [1, 2, 13, 14, 5, 3, 0, 3];

// var filter = arr.filter((item, index) => item !== 2 && item !== 5);
// console.log(arr);
// console.log(filter);

// Array.prototype.myFilter = function (callback) {
//   const arr = this;
//   let rArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i], i)) rArr.push(arr[i]);
//   }
//   return rArr;
// };

// var filter2 = arr.myFilter((item, index) => item !== 2 && item !== 5);
// console.log(arr);
// console.log(filter2);

// Array.prototype.myFind = function (callback) {
//   const arr = this;
//   let rItem = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       rItem = arr[i];
//       break;
//     }
//   }
//   return rItem;
// };

// var fynd = arr.find((item, index) => item > 10);
// console.log(arr);
// console.log(fynd);

// var fynd2 = arr.myFind((item, index) => item > 10);
// console.log(arr);
// console.log(fynd2);

//--------- End: Polyfills for filter & find function -------

//---------- Start: Polyfills for bind, call, and apply ---------

// var obj = {
//   fname: "mohit",
//   lname: "sharma",
//   printN(val) {
//     console.log(`${this.fname} ${this.lname} ${val}`);
//   },
// };

// obj.printN("ok");

// var ob2 = {
//   fname: "Rohit",
//   lname: "verma",
// };

// obj.printN.bind(ob2, "ok")();
// obj.printN.call(ob2, "ok");

// Function.prototype.myBind = function (...args) {
//   const _this = this;
//   const obj = args[0];
//   const restItems = args.splice(1);
//   return function (...args1) {
//     const otItems = [...args1, ...restItems];
//     _this.apply(obj, otItems);
//   };
// };

// Function.prototype.myCall = function (...args) {
//   const _this = this;
//   const obj = args[0];
//   const restItm = args.splice(1);
//   _this.apply(obj, restItm);
// };

// Function.prototype.myApply = function (...args) {
//   const _this = this;
//   const obj = args[0];
//   const restItems = args.splice(1);
//   console.log("restItems..", arguments[0]);
//   _this.call(obj, restItems);

//   //better approach...try to understand this.
//   //   arguments[0].fun = this;
//   //   arguments[0].fun(...arguments[1]);
// };

// obj.printN.myBind(ob2, "okies")();
// obj.printN.myCall(ob2, "yokies");
// obj.printN.myApply(ob2, ["dokies"]);

// function runApply() {
//   arguments[0].fn = this; // dont understand...
//   arguments[0].fn(...arguments[1]);
// }

// Function.prototype.runApply = runApply;

// function displayUser(state, country, method) {
//   console.log("----- " + method + " -----");
//   console.log("Name : ", this.name);
//   console.log("Age : ", this.age);
//   console.log("City : ", this.city);
//   console.log("State : ", state);
//   console.log("Country : ", country);
// }
// var user = {
//   name: "John Stewart",
//   age: "28",
//   city: "Sanfrancisco",
// };
// displayUser.runApply(user, ["CA", "USA", "apply --> runApply"]);
//---------- End: Polyfills for bind, call, and apply ---------

/****************************** End: Polyfills ********************************/

/****************************** Start: Promise ********************************/

/*
   state of promise: pending(when promise start), fullfilled(when resolved),
   rejected(when rejected), settled(either resolve or reject)
*/
/* manually write promise otherwise mostly we do API call please*/

// let promiseToclean = new Promise((resolve, reject)=>{ // manually written
//    // do some async call
//    var clean = true;
//    if(clean){
//        resolve("clean"); //success
//    }else{
//        reject("not clean"); //failure
//    }
// });

// promiseToclean.then((resolveParam)=>{
//   console.log("My room is ",resolveParam);
// }).catch((error)=>{
//     console.log("My room is ",error);
// });

/****** complex example on promise ********/

// let cleanRoom = function () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Cleaned the Room");
//     }, 1500);
//   });
// };

// let removeGarbage = function (param) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${param}, removed the garbage`);
//     }, 2000);
//   });
// };

// let winIceCream = function (param) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${param} and finally won the Icecream !!!`);
//     }, 1100);
//   });
// };

// let failToGetIceCream = function () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`Failed to get the icecream`);
//     }, 1000);
//   });
// };

// let removeGarbage2 = function(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(`removed the garbage`)
//         }, 2000)
//     });
// };

// let winIceCream2 = function(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(`and finally won the Icecream !!!`)
//         }, 1100)
//     });
// };

// let failToGetIceCream2 = function(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             reject(`Failed to get the icecream 2`)
//         }, 4000)
//     });
// };

// cleanRoom()
//   .then(function (param) {
//     return removeGarbage(param);
//   })
//   .then(function (param2) {
//     return winIceCream(param2);
//   })
//   .then(function (param3) {
//     console.log("result: ", param3);
//   })
//   .catch(function (error) {
//     console.log("error: ", error);
//   })
//   .finally(function () {
//     // runs when the promise is settled, doesn't matter successfully or not
//     console.log("Finally settled");
//   });

// cleanRoom()
//   .then(function (param) {
//     return removeGarbage(param);
//     // we are just pass data and data is printed at line @@@@, so finally is printed first...
//     // check below example to understand more.
//   })
//   .finally(function () {
//     // runs when the promise is settled, doesn't matter successful or not
//     console.log("Finally settled");
//   })
//   .then(function (param2) {
//     return winIceCream(param2);
//   })
//   .then(function (param3) {
//     console.log("result: ", param3); //@@@@
//   })
//   .catch(function (error) {
//     console.log("error: ", error);
//   });

/* That's very convenient, because finally is not meant to process a promise result.
 * So it passes it through.
 * Finally maintained the order in which it is written, i.e, if it is written
 * before "then" than it gets printed/executed after all promises has been settled and first
 * console inside .finally() is printed and then after .then().
 * for better understanding see below example....
 */

// function checkMail() {
//   return new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//       setTimeout(() => {
//         resolve("Mail1 has arrived");
//       }, 3000);
//     } else {
//       reject(new Error("Failed1 to arrive"));
//     }
//   });
// }

// function checkMail2() {
//   return new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//       setTimeout(() => {
//         resolve("Mail2 has arrived");
//       }, 1000);
//     } else {
//       reject(new Error("Failed2 to arrive"));
//     }
//   });
// }

// checkMail()
//   .finally(() => {
//     console.log("Finally at the start...Experiment completed");
//   })
//   .then((mail) => {
//     console.log(mail);
//     return checkMail2();
//   })
//   .then((mail) => {
//     console.log(mail);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// checkMail()
//   .then((mail) => {
//     console.log(mail);
//     return checkMail2();
//   })
//   .then((mail) => {
//     console.log(mail);
//   })
//   .finally(() => {
//     console.log("Finally after then before catch...Experiment completed");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// checkMail()
//   .then((mail) => {
//     console.log(mail);
//     return checkMail2();
//   })
//   .then((mail) => {
//     console.log(mail);
//   })
//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(() => {
//     console.log("Finally after catch...Experiment completed");
//   });

// checkMail()
//   .then((mail) => {
//     console.log(mail);
//     return checkMail2();
//   })
//   .finally(() => {
//     console.log("Finally between thens...Experiment completed");
//   })
//   .then((mail) => {
//     console.log(mail);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

/* In above example, if one promise is finished then other one is start executing */
/* What if you want to fire up all (or) any one of them to succeed (or) race between them */

/* Fire up all promises at a time */
/* When All are finished(i.e all are resolved) then "all: All finished:->" will be printed */
// Promise.all([cleanRoom(), removeGarbage2(), winIceCream2()]).then(function(param){
//     console.log("all: All finished:-> ",param);
// });
/* all: All finished:-> ["Cleaned the Room", "removed the garbage", "and finally won the Icecream !!!"]*/

/* "all err->Failed to get the icecream" will be printed*/
// Promise.all([cleanRoom(), removeGarbage2(), winIceCream2(), failToGetIceCream()])
// .then(function (param) {
//     console.log("all :: All finished->",param);
// }).catch((err)=>{
//     console.log("all err->",err);
// });

/*
   What if you want to execute when one of them is finished first(either resolved or reject)
   and if reject first executed for any promise then it will go in catch block;
*/
// Promise.race([cleanRoom(), removeGarbage(), winIceCream()]).then(function(){
//     console.log("Race :: One of them is resolved first");
// });

/* here failToGetIceCream is rejected first because 1sec time in setTimeout
   So that's why catch block will be executed */
// Promise.race([cleanRoom(), removeGarbage(), failToGetIceCream()]).then(function(){
//     console.log("Race: One of them is resolved first");
// }).catch((err)=>{
//     console.log("Race err->",err);
// });

/* here cleanRoom is resolved first because 1.5sec time in setTimeout
   So that's why then block will be executed */
// Promise.race([cleanRoom(), removeGarbage(), failToGetIceCream2()]).then(function(){
//     console.log("Race: One of them is resolved first");
// }).catch((err)=>{
//     console.log("Race err->",err);
// });

/* Similar to Promise.race, but waits only for the first fulfilled promise and gets its
   result. If all of the given promises are rejected, then the returned promise is rejected with
   AggregateError, a special error object that stores all promise errors in its errors property.
*/
// Promise.any([cleanRoom(), failToGetIceCream()])
// .then(function(param){
//     console.log("any: One of them is resolved first", param);
// });

// Promise.any([failToGetIceCream(), failToGetIceCream2()])
// .then(function(){
//     console.log("any: One of them is resolved first");
// }).catch((error)=>{
//     console.log("any error: ",error.constructor.name); // AggregateError
//     console.log("any error: ",error.errors[0]); //Failed to get the icecream
//     console.log("any error: ",error.errors[1]); //Failed to get the icecream
// });

/*
   Immediate Resolution or Rejection
*/
/* ------ Promise.resolve(value) creates a resolved promise with the result value.-------- */
//let promise = new Promise(resolve => resolve("1"));// 1*
//promise.then((param)=>{alert(param)})
//let promise2 = Promise.resolve("2");//2*
//promise2.then((param)=>{alert(param)})
/* --------- above, both 1* and 2* are same and return promise.----------- */

/* ---------- Promise.reject(error) creates a rejected promise with error.----------- */
//let promise3 = new Promise((resolve, reject) => reject(3));//3*
//promise3.then((param)=>{alert(param)}).catch((err)=>{alert(err)})
//let promise4 = Promise.reject(4);//4*
//promise4.then((param)=>{alert(param)}).catch((err)=>{alert(err)})
/* ---------- above,both 3* and 4* are same and return promise with error.----------- */

/****************************** End: Promise ********************************/

/****************************** Start: Async & Await ********************************/

/**
 * Promises were added in JavaScript to handle asynchronous operations easily.
 * The async/await is syntactical sugar, added in ES7, that facilitates working
 * with promises. Async/await helps with writing completely synchronous-looking
 * code while performing asynchronous tasks.
 * await is used to wait for a promise to resolve or reject, and can only be
 * used inside an asynchronous function.
 */

/* Async alws return promise. */

/* One way of doing */

//    async function callAsyncFunc(callSuccess){
//        let response = await fetch('https://api.github.com/users');
//        let userData = await response.json();
//        console.log("userData..",userData);
//        try{
//            callSuccess(userData)
//        }catch(err){
//            console.log("err",err);
//        }
//    }

//    function onGetUser(){
//     console.log("on click");
//     callAsyncFunc(
//         (userD)=>{
//             console.log("finally got the data..",userD);
//         }
//     );
//    }

//    onGetUser();

/* Another way of doing */

/* 1st another way - My fav and easy to understand and use */

// async function callAsyncFunc(){
//     let response = await fetch('https://api.github.com/users');
//     let userData = await response.json();
//     console.log("userData..",userData);
//     return userData

// }


// async function onGetUser(){
//  console.log("on click");
//  let user = await callAsyncFunc();
//  console.log("1st user",user[0]);
// }

// onGetUser();

/******** 2nd another way *********/

// function onGetUser(){
//  console.log("on click");
//  callAsyncFunc().then((user)=>{
//      console.log("finally..", user);
//  }).catch((err)=>{
//      console.log("err..",err);
//  })
// }

// onGetUser();

/* 3rd another way */

// async function callAsyncFunc(){
//     try{
//         let response = await fetch('https://ap.github.com/users');
//         let userData = await response.json();
//         console.log("userData..",userData);
//         return userData;
//     }catch(err){
//         console.log("err",err);
//     }
// }

// function onGetUser(){
//  console.log("on click");
//  callAsyncFunc().then((user)=>{
//      console.log("finally..", user);
//  })
// }

/**
 * Another example of Async & Await...
 */

// // The menu
// var menu = ['Hamburger', 'Chicken Soup', 'Pasta'];

// // ---- The following function returns a promise that resolves if the customer
// // orders something from the menu: ------
// function order_food (order) {
//     let promise = new Promise((resolve, reject) => {
//     if(menu.includes(order)) {
//         resolve();
//     }else {
//         reject('This item is not on the menu.');
// }
// });
//     return promise;
// }

// // The following function returns a promise that resolves if the customer
// // pays 20 or more for the food:
// function make_payment (payment) {
//     let promise = new Promise((resolve, reject) => {
//     if(payment > 20) {
//         resolve();
//     }else {
//         reject('payment failed!!!-Your order costs more than 20.');
// }
// });
//     return promise;
// }

// // await can only be used inside an async function (one way of doing...)
// async function eat(order, payment){
//     // waiting for the promises to resolve
//     await order_food(order);
//     console.log("Order received by the customer.");
//     console.log("Collect payment.");
//     await make_payment(payment);
//     console.log("Payment received.");
//     return `order "${order}" with payment of Rs ${payment}`
// }

// // Customer places his/her order and specifies the amount to pay
// // Play around with these parameters to fully understand what is going on.
// eat("Hamburger", 20).then((param)=>{console.log("resolved-payment of "+param)}).catch ((error)=>{
//     console.log(error)
// });

// // await can only be used inside an async function..(Another way of doing(using try catch))
// async function eat(order, payment){
//     // waiting for the promises to resolve
//     try{
//         await order_food(order);
//         console.log("Order received by the customer.");
//         console.log("Collect payment.");
//         await make_payment(payment);
//         console.log("Payment received.");
//     }
//     // Catching errors or rejected promises
//     catch (error){
//         console.log(error)
//     }
// }

// // Customer places his/her order and specifies the amount to pay
// // Play around with these parameters to fully understand what is going on.
// eat("Hamburger", 20);



//-----another example --------

// async function cal(n, add) {
//     let result = [];
//     let temp = [];
//     for (let i = 0; i <= n; i++) {
//         result.push(i);
//         temp.push(await calAPI(i, add));
//     }
//     console.log(result);
//     console.log(temp);
//     return { result: result, temp: temp }
// }

// async function calAPI(item, add) {
//     let url = "https://c8fa-49-36-58-9.in.ngrok.io/api/add?num1=" + item + "&num2=" + add;
//     let temp = await fetch(url).then(res => {
//         return res.json();
//     })
//     console.log(temp.sum);
//     return temp.sum;
// }
// var n = 5;
// var add = 2;

/**
 * const { result = [], temp = [] } = cal(n, add)
 * console.log(result.join(","));
 * console.log(temp.join(","));
 */
/**
 * Remember: I did mistake in one interview already.
 * Above is wrong way to access data. It will print console before data comes.
 * check, right way is written below.
 */
// cal(n, add).then((res) => {
//     const { result = [], temp = [] } = res;
//     console.log(result.join(","));
//     console.log(temp.join(","));
// })



/****************************** End: Async & Await ********************************/

/****************************** Start: Prototype Inheritance ********************/

// var car = {
//     carName: "Mercedecs",
//     price: "Rs 3000000"
// }

// var engine = {
//     engineType: "Petrol"
// }

// // it is underscore underscore proto (__proto__), not underscore proto (_proto_)
// // I already did mistake in one interview, so keep in mind.
// car.__proto__ = engine; 

// console.log("car....",car); //car.... {carName: "Mercedecs", price: "Rs 3000000"}
// console.log("car engineType....",car.engineType); //car engineType.... Petrol

// var hamster = {
//   stomach: [],
//   eat(str) {
//     this.stomach.push(str);
//   },
// };

// var seed = {
//   __proto__: hamster,
// };

// var lazy = {
//   __proto__: hamster,
// };

// seed.eat("apple");
// console.log(seed.stomach); // ['apple'] // because of shallow copy both values gets changed
// console.log(lazy.stomach); // ['apple']


//******* using "Object.assign" method  ************/
// var per1 = {
//     fname: "mohit",
//     printName() {
//         console.log(`${this.fname} ${this.type}`);
//     }
// }

// var dance = {
//     type: "Classical"
// }

// Object.assign(per1.__proto__, dance)
// console.log(per1.type);//Classical
// per1.printName();//Mohit Classical
// console.log(per1);//Person {fName: 'Mohit', printName: f}

/****************************** End: Prototypical Inheritance ********************/

/**************************** Start: OOPS concept in JAVASCRIPT **********************/
/**
 * oops -
 * 1. Object
 * 2. class
 * 3. Encapsulation
 * 4. Inheritence
 * 5. Abstraction
 * 6. Polymorphism
 */

// let firstName = "Mohit";
// let lastName = "Sharma";
// let printFullName = function(){
//     console.log(`${firstName} ${lastName}`);
// }
// printFullName()

/*************************** Encapsulation ***********************/
/********** means put above code in one capsule *********/
// var person = {
//     firstName: "Mohit",
//     lastName: "Sharma",
//     printFullName: function(){
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }
// person.printFullName()

/*************************** Factory *****************************/
/*
  A Factory function is any function which is not a class (or) constructor that returns
  a (presumably new) object. In Javascript, any function can return an object.
  When it does so without the "new" keyword, it is a factory function.
*/
// function person1(f, l){
//     return {
//         firstName: f,
//         lastName: l,
//         printFullName: function(){
//             console.log(`${this.firstName} ${this.lastName}`);
//         }
//     }
// }
// person1("Mohit", "Sharma").printFullName()

/*************************** Constructor *****************************/
// function Person(){
//     this.firstName = "Mohit",
//     this.lastName = "Sharma",
//     this.printFullName = function(){
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }
// let person3 = new Person();
// person3.printFullName()

/*************************** Inheritance *****************************/
// let person4 = {
//     address: "Mumbai"
// }
// person4.__proto__ = person3;
// person4.printFullName()

/**************************** Abstraction **************************/
// function PersonDetails(){
//     let address= "Mumbai"; //Abstraction: can't access outside
//     this.firstName = "Rohit";
//     this.lastName = "Verma";
//     this.printDetails = function(){
//         console.log(`${this.firstName} ${this.lastName} ${address}`);
//     };
// }
// let per = new PersonDetails();
// console.log(per.address); //undefined
// per.printDetails() //Rohit Verma Mumbai

/*
   for accessing address we have to define getter and for setting it we have to define
   setter.
 */
// function PersonDetails2() {
//   let address = "Mumbai"; //Abstraction: can't access outside
//   this.firstName = "Rohit";
//   this.lastName = "Verma";
//   this.printDetails = function () {
//     console.log(`${this.firstName} ${this.lastName} ${address}`);
//   };
//   this.printDetails1 = () => {
//     console.log(`${this.firstName} ${this.lastName} ${address}`);
//   };
//   Object.defineProperty(this, "address", {
//     get: function () {
//       // getter
//       return address;
//     },
//     set: function (value) {
//       // setter
//       address = value;
//     },
//   });
// }
// let per2 = new PersonDetails2();
// per2.printDetails();//Rohit Verma Mumbai
// per2.printDetails1();//Rohit Verma Mumbai
// let fn1 = per2.printDetails;
// fn1();//undefined undefined Mumbai
// let fn2 = per2.printDetails1;
// fn2();//Rohit Verma Mumbai
// console.log(per2.address); //Mumbai
// per2.address = "Bangalore";
// per2.firstName = "Sachdev";
// console.log(per2.address); //Bangalore
// per2.printDetails(); //Sachdev Verma Bangalore

// let person = {
//   address: "Mumbai",
//   firstName: "Rohit",
//   lastName: "Verma",
//   printDetails() {
//     console.log(`${this.firstName} ${this.lastName} ${this.address}`);
//   },
//   printDetails1: function () {
//     console.log(`${this.firstName} ${this.lastName} ${this.address}`);
//   },
//   printDetails2: () => {
//     console.log(`${this.firstName} ${this.lastName} ${this.address}`);
//   },
// };
// person.printDetails(); //Rohit Verma Mumbai
// let fn = person.printDetails;
// fn(); //undefined undefined undefined
// person.printDetails1(); //Rohit Verma Mumbai
// let fn1 = person.printDetails1;
// fn1(); //undefined undefined undefined
// person.printDetails2(); //undefined undefined undefined
// let fn2 = person.printDetails2;
// fn2(); //undefined undefined undefined

/**************************** END: OOPS concept in JAVASCRIPT ************************/
/*** Start: Prototype inheritance using "Constructor function" (Lowes Asked (VVI)) ****/
/**
 * Imp: To access prototype in object, use __proto__
 * but use ".prototype" property in "constructor function".
 */

// function student(name) {
//     this.name = name;
// }

// student.prototype.printName = function () {
//     console.log(this.name);
// };

// function studentDetails(name, address) {
//     this.address = address;
//     student.call(this, name);
//     this.details = function () {
//         console.log(this.address + "---->" + this.name);
//     };
// }

// studentDetails.prototype = Object.create(student.prototype);

// // define printDetails function after creating the object and assigning to 
// // "studentDetails.prototype" otherwise you will get error.
// studentDetails.prototype.printDetails = function () {
//     console.log(this.name + "---" + this.address);
// };

// var s = new studentDetails("Mohit", "bangalore");
// s.printDetails(); // Mohit---bangalore
// s.details(); // bangalore---->Mohit
// s.printName(); //Mohit

//---------- check this (V. IMP)---- array flat function using class -------
// function ParentArr(arr) {
//   this.arr = arr;
//   // writing method like this will be created every time when object
//   // this constructor function created... so better define method
//   // through prototype as it wont create new function again and again
//   // when object is created.

//   this.getLength = function () {
//     return this.arr.length;
//   };
// }

// function MyArray(arr) {
//   this.flat = [];
//   this.flatVal = 0;
//   ParentArr.call(this, arr);
// }

// It will override the constructor of child and make it parent constructor also.
// MyArray.prototype = Object.create(ParentArr.prototype);
// MyArray.prototype.flatAdd = function () {
//   // better way to create method.
//   const recurse = (a) => {
//     for (let i = 0; i < a.length; i++) {
//       if (typeof a[i] === "object") {
//         recurse(a[i]);
//       } else {
//         this.flatVal = this.flatVal + a[i];
//       }
//     }
//   };
//   recurse(this.arr);
//   return this.flatVal;
// };

// var c = new MyArray([[1, 2], 3, [4, 5, [6], 7, [8, [9, [10]]]]]);
// console.log(c.getLength()); //3
// console.log(c.flatAdd());//55
// // print ParentArr {} obj but it should print MyArray {} obj as
// // c is the instance of MyArray.
// console.log(c); //ParentArr {flat: Array(0), flatVal: 55, arr: Array(3), getLength: ƒ}

// -----look into this example, it won't override Child constructor to Parent-----

// function ParentArr2(arr) {
//   this.arr = arr;
//   this.getLength = function () {
//     return this.arr.length;
//   };
// }

// function MyArray2(arr) {
//   this.flat = [];
//   this.flatVal = 0;
//   ParentArr2.call(this, arr);
// }

// MyArray2.prototype = Object.create(ParentArr2.prototype);

// //If you don't set Rectangle.prototype.constructor to Rectangle,
// //it will take the prototype.constructor of Shape (parent).
// //To avoid that, we set the prototype.constructor to Rectangle (child).
// MyArray2.prototype.constructor = MyArray2; // this is responsible not to override Child constructor to Parent

// MyArray2.prototype.flatAdd = function () {
//   const recurse = (a) => {
//     for (let i = 0; i < a.length; i++) {
//       if (typeof a[i] === "object") {
//         recurse(a[i]);
//       } else {
//         this.flatVal = this.flatVal + a[i];
//       }
//     }
//   };
//   recurse(this.arr);
//   return this.flatVal;
// };

// var c2 = new MyArray2([[1, 2], 3, [4, 5, [6], 7, [8, [9, [10]]]]]);
// console.log(c2.getLength()); //3
// console.log(c2.flatAdd());//55
// console.log(c2); //MyArray2 {flat: Array(0), flatVal: 55, arr: Array(3), getLength: ƒ}

// -------------- look this example also (V.Imp) --------------
// function ParentArr3(arr) {
//   this.arr = arr;
//   this.getLength = function () {
//     return this.arr.length;
//   };
// }

// function MyArray3(arr) {
//   this.flat = [];
//   this.flatVal = 0;
//   ParentArr3.call(this, arr);
// }

// MyArray3.prototype = new ParentArr3();
// MyArray3.prototype.flatAdd = function () {
//   const recurse = (a) => {
//     for (let i = 0; i < a.length; i++) {
//       if (typeof a[i] === "object") {
//         recurse(a[i]);
//       } else {
//         this.flatVal = this.flatVal + a[i];
//       }
//     }
//   };
//   recurse(this.arr);
//   return this.flatVal;
// };

// var c3 = new MyArray3([[1, 2], 3, [4, 5, [6], 7, [8, [9, [10]]]]]);
// console.log(c3.getLength()); //3
// console.log(c3.flatAdd());//55
// console.log(c3); //MyArray3 {flat: Array(0), flatVal: 55, arr: Array(3), getLength: ƒ}

/********** End: Prototype inheritance using constructor function *********/

/************************* Start: Classes in JS *********************/

// var firstName = "Ram";
// var lastName  = "Deol";
// var person = {
//     firstName: "Mohit",
//     lastName: "Sharma",
//     printFullName: function(){
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }
// person.printFullName();// Mohit Sharma
// let printingName = person.printFullName;
// printingName() // Ram Deol

/* converting above object to class and class is an example of encapsulation */
// class Person { //always follows "use strict"
//     constructor(firstName, lastName){
//         this.firstName = firstName, //class field - public
//         this. lastName = lastName //class field - public
//         this.printFullNameOfPerson = this.printFullNameOfPerson.bind(this)
//     }

//     printFullName(){ //class method - public
//      console.log(`${this.firstName} ${this.lastName}`);
//     }

//     fullNamePrint = ()=>{ //class method
//         console.log(`${this.firstName} ${this.lastName}`);
//     }

//     printFullNameOfPerson = function(){ //class method
//         console.log(`${this.firstName} ${this.lastName}`);
//     }

//     get getFName() { // getter
//         return this.firstName;
//     }

//     set setFName(value) { // setter
//         this.firstName = value;
//     }

// }

//let per = new Person("Mohit", "Sharma")
// console.log("firstName..",per.firstName);//firstName.. Mohit
// per.firstName="Rohit";
// console.log(per.getFName); //getting //Rohit
// per.setFName = "Rajan"; //setting
// console.log(per.getFName);//Rajan
// per.printFullName();//Rajan Sharma
// let printName = per.printFullName;

/* error, Uncaught TypeError: Cannot read property 'firstName' of undefined because
class and its method follows "use strict" */
//printName() // doesn't print "Ram Deol" but give error
//printName.call(per); // Rajan Sharma

/* we don't want to loose "this" then use "Arrow function"
 */
// per.fullNamePrint();
// let printName2 = per.fullNamePrint;
// printName2();

/* we don't want to loose "this" then use bind that function in constructor
 */
// per.printFullNameOfPerson();
// let printName3 = per.printFullNameOfPerson;
// printName3();

// class Self extends Person {
//     constructor(firstName, lastName, address){
//         super(firstName, lastName);// calling parent constructor
//         this.address = address;
//         // this.firstName = "Virat"; // override the parent "firstName"
//     }

//     printAddress = ()=>{ // @@@@@@@
//         console.log(`${this.firstName} lives in ${this.address}.`);
//     }

//     /* an example of method overiding and polymorphism */
//     printFullName(){
//         console.log(`${this.firstName} ${this.lastName} is an example of method
//         overiding and polymorphism`);
//     }

//     /* method overloading won't support in JS.
//     If we invoke printAddress() then that will call alws method at line "@@@@@@@"
//     */
//     printAddress(){
//         console.log(`${this.firstName} lives in ${this.address}is an example of method oveloading.`);
//     }

//     callParentFunc(){
//         super.fullNamePrint() //calling the parent class function in child class function.
//     }
// }

// let selfP = new Self("Sachin", "Tendulkar", "Mumbai")
// selfP.printAddress()//Sachin lives in Mumbai.
// selfP.printFullName()//Sachin Tendulkar is an example of method overiding and polymorphism
// selfP.printAddress()
/**
 * Sachin lives in Mumbai. "Not... Sachin lives in Mumbai is an example of method oveloading."
 */

/*
 * Usually, static methods are used to implement functions that belong to the class, but not to any
 * particular object of it. static methods are inherited to its child class
 */

// class Animal {
//     constructor(speaks, eats){
//         this.speaks = speaks;
//         this.eats = eats
//     }

//     static compareAnimal(animal1, animal2){
//         return animal1 === animal2
//     }

// }

// class Horse extends Animal {
//     constructor(_speaks, _eats, _run){
//         super(_speaks, _eats);
//         this.run=_run
//     }

//     fastRunner(){
//         console.log("Is this horse a fast runner: ",this.run);
//     }
// }

// let ann1 = new Animal(true, true)
// let ann2 = new Animal(false, true)
// let ann3 = ann1;
// let ann4 = new Animal(true, true)
// let cmp = Animal.compareAnimal(ann1, ann2)
// console.log("Animal1 and Animal2 are same..", cmp) // false
// let cmp2 = Animal.compareAnimal(ann1, ann3)
// console.log("Animal1 and Animal3 are same..", cmp2) // true
// let cmp3 = Animal.compareAnimal(ann1, ann4)
// console.log("Animal1 and Animal4 are same..", cmp3) // false
/**
 * Uncaught TypeError: ann1.compareAnimal is not a function because "static method" is class level,
 *  but not a instance of that class.
 */
//console.log("Animal1 and Animal2 are same..", ann1.compareAnimal(ann1, ann2))

// let hr1 = new Horse(true, true, true)
// let hr2 = new Horse(true, true, false)
// let hr3 = hr1
// let hrCmp = Animal.compareAnimal(hr1, hr2) // inherit the compareAnimal() from Animal
// console.log("Horse1 and Horse2 are same..", hrCmp) // false
// let hrCmp2 = Animal.compareAnimal(hr1, hr3)
// console.log("Horse1 and Horse3 are same..", hrCmp2) // true

/********** Mixins....in JAVASCRIPT same as prototype inheritance *********/
// class Person {
//     constructor() {
//         this.fName = "Mohit";
//         this.lName = "Sharma"
//     }

//     printName() {
//         console.log(`${this.fName} ${this.lName} ${this.type}`);
//     }
// }

// var dance = {
//     type: "Classical"
// }

// Object.assign(Person.prototype, dance) //mixins..same as prototype inheritance
// var per1 = new Person();
// console.log(per1.type);//Classical
// per1.printName();//Mohit Sharma Classical
// console.log(per1);//Person {fName: 'Mohit', lName: 'Sharma'}

/*********** Private field and method of a Class JS **************/

// class CoffeeMachine {
// /**
//  * # is a special sign that the field is private. We can't access it from outside or from
//  * inheriting classes.
//  * */

// /**
//  * Private fields do not conflict with public ones. We can have both private #waterAmount and 
//  * public waterAmount fields at the same time.
//  */

//     #waterLimit = 19999;
// /**
//  * #waterLimit = 19999; // first declare (or) define (#)private field outside of constructor
//  * // then assign value inside constructor otherwise if you directly assign value inside
//  * // constructor without declaring (or) defining it outside throw an error.
//  * // Uncaught SyntaxError: Private field '#waterLimit' must be declared in an enclosing class
// */

//     constructor(val){
//         this.#waterLimit = val;
//         this.waterLimit = val;
//     }

//     #fixWaterAmount(value) {
//       if (value < 0) return 0;
//       if (value > this.#waterLimit) return this.#waterLimit;
//       if(value < this.#waterLimit) {
//           this.#waterLimit = value;
//           return this.#waterLimit;
//       }
//     }

//     setWaterAmount(value) { // setter
//       this.#waterLimit = this.#fixWaterAmount(value);
//     }

// // Either use above "setWaterAmount" or below "setWaterAmount" methos
// /**
//          setWaterAmount(value) { // setter
//             this.#waterLimit = value;
//         }
//  **/    

//     getWaterAmount() { //getter
//         return this.#waterLimit;
//     }

//   }

//let coffeeMachine = new CoffeeMachine(9999);

// /**
//  * Below Line: can't access privates from outside of the class
//  */
//console.log("#waterLimit: ",coffeeMachine.#waterLimit);
//console.log("public waterLimit: ",coffeeMachine.waterLimit);

// // can't access privates from outside of the class, so we need getter and setter
//coffeeMachine.#fixWaterAmount(123); // Error
//coffeeMachine.#waterLimit = 1000; // Error
//coffeeMachine.setWaterAmount(2000);
//console.log(coffeeMachine.getWaterAmount());

/*
    But if we inherit from CoffeeMachine, then we'll have no direct access to #waterAmount.
    We'll need to rely on waterAmount getter/setter:
*/

// class MegaCoffeeMachine extends CoffeeMachine {
//    method() {
//        console.log("in side MegaCoffeeMachine..",this.getWaterAmount());
//        // Below Line: Error: can only access in CoffeeMachine directly, better to use getter.
//         console.log( this.#waterAmount ); 
//    }
// }

// let megaC = new MegaCoffeeMachine(786)
// megaC.method()

/************************* End: Classes in JS *********************/

/*************** Start: Bubbling & (Capturing (or) trickling) ********************/

/*<!DOCTYPE html>
     <html>
         <head>
             <style>
                 div{
                     min-width: 100px;
                     min-height: 100px;
                     padding: 24px;
                     border: 1px solid black;
                     cursor: pointer;
                 }
             </style>
         </head>
         <body>
             <h1>Hello Mohit</h1>
             <div id="grandParent">grand-parent
                 <div id="parent">parent
                     <div id="child">child</div>
                 </div>
             </div>

             <script src="./MyProgramme.js"></script>
         </body>
     </html>
*/

/* __________ Note:- Capturing will first happen then bubbling______________*/
/* We can write like this too */

//  document.getElementById("grandParent").addEventListener("click",(event)=>{
//  console.log("clicked grand-parent");
//  })

//or

//  document.querySelector("#grandParent").addEventListener("click",(event)=>{
//  console.log("clicked grand-parent...querySelector...");
//  })

/************************* Bubbling(child to parent to grandParent) ************************/

/*

    "false" (for bubbling - useCapture value is false and default feature) is a default value of
    useCapture and it is not necessary to write explicitly.
    but "true" (for capturing - useCapture value is true - not a default feature)

    document.querySelector("#grandParent").addEventListener("click",
    (event)=>{
        console.log("clicked grand-parent");
    }) // bubbling

*/

// document.querySelector("#grandParent").addEventListener("click",(event)=>{
//     console.log("clicked grand-parent");
// }, false)

// document.querySelector("#parent").addEventListener("click",(event)=>{
//     console.log("clicked parent");
// }, false)

// document.querySelector("#child").addEventListener("click",(event)=>{
//     console.log("clicked child");
// }, false)

/*
   How to stop bubbling !!!!
   so when user will click on child. Event won't be bubbled up to parent to
   grandParent but if user click on parent, Event will be bubbled up to
   grandParent because, we are not stopping the event to be bubbled up
   using "event.stopPropagation()".
*/

// document.querySelector("#grandParent").addEventListener("click",(event)=>{
//     console.log("clicked grand-parent");
// }, false)

// document.querySelector("#parent").addEventListener("click",(event)=>{
//     console.log("clicked parent");
// }, false)

// document.querySelector("#child").addEventListener("click",(event)=>{
//     console.log("clicked child");
//     event.stopPropagation() // stop the event to be bubbled up and we can
//     // write this method any where(starting or middile or last) inside callback.
//     console.log("clicked child");
// }, false)

/************************* Capturing(grandParent to parent to child) ************************/
// document.querySelector("#grandParent").addEventListener("click",(event)=>{
//     console.log("clicked grand-parent");
// }, true)

// document.querySelector("#parent").addEventListener("click",(event)=>{
//     console.log("clicked parent");
// }, true)

// document.querySelector("#child").addEventListener("click",(event)=>{
//     console.log("clicked child");
// }, true)

/*
   How to stop capturing !!!!
   so when user will click on child. Event won't be captured from parent to
   child. It will capture only for grandParent to parent and after parent
   we are stopping the event to be captured till the child using
   "event.stopPropagation()" in parent.
*/

// document.querySelector("#grandParent").addEventListener("click",(event)=>{
//     console.log("clicked grand-parent");
// }, true)

// document.querySelector("#parent").addEventListener("click",(event)=>{
//     console.log("clicked parent");
//     event.stopPropagation() // stop the event to be captured
// }, true)

// document.querySelector("#child").addEventListener("click",(event)=>{
//     console.log("clicked child");
// }, true)

/*************** Guess the output(mixing of bubbling and capturing) ***************/
/* Caputuring execute first then bubbling */

// document.querySelector("#grandParent").addEventListener("click",(event)=>{
//     console.log("clicked grand-parent");
// }, false) // bubbling

// document.querySelector("#parent").addEventListener("click",(event)=>{
//     console.log("clicked parent");
// }, true) // capturing

// document.querySelector("#child").addEventListener("click",(event)=>{
//     console.log("clicked child");
// }, false) // bubbling

/*
when user click on child, capturing will happen then bubbling. So output will be :
clicked parent
clicked child
clicked grand-parent
*/

/*************** End: Bubbling & (Capturing (or) trickling) *********************/

/******************** Start: event.preventDefault()****************************/
/**
 * preventDefault(); does one thing: It stops the browsers default behaviour.
 */

// Normal Execution...
/*
    <div onclick='executeParent()'>
    <a href='https://stackoverflow.com' onclick='executeChild()'>
    Click here to visit stackoverflow.com
    </a>
    </div>
*/
//  function executeChild() {
//    alert('Link Clicked');
//  }

//  function executeParent() {
//    alert('div Clicked');
//  }

/**
 * Run the above code, you will see the hyperlink ‘Click here to visit
 * stackoverflow.com‘ now if you click on that link first you will get the
 * javascript alert Link Clicked Next you will get the javascript alert div
 * Clicked and immediately you will be redirected to stackoverflow.com.
 */

// Execution when event.preventDefault() is there in code.

/*
    <div onclick='executeParent()'>
    <a href='https://stackoverflow.com' onclick='executeChild()'>
    Click here to visit stackoverflow.com
    </a>
    </div>
*/
//  function executeChild() {
//    event.preventDefault();
//    event.currentTarget.innerHTML = 'Click event prevented'
//    alert('Link Clicked');
//  }

//  function executeParent() {
//    alert('div Clicked');
//  }

/**
 * Run the above code you will see the hyperlink ‘Click here to visit
 * stackoverflow.com‘ now if you click on that link first you will get the
 * javascript alert 'Link Clicked' Next you will get the javascript alert
 * 'div Clicked'. Next you will see the hyperlink ‘Click here to visit stackoverflow.com‘
 * replaced by the text ‘Click event prevented‘ and you will not be redirected to
 * stackoverflow.com. This is due to event.preventDefault() method we used to
 * prevent the default click action to be triggered.
 */

/****************** End: event.preventDefault() *****************************/

/**************************** Start: Event Delegation *********************/

/*
    "The process of using event propagation (bubbling) to handle events at a
    higher level in the DOM than the element on which the event originated."
    It allows us to avoid adding events listeners to specific nodes; instead,
    the event listener is added to one parent and it analyzes bubbled events
    from its children components.
*/

/*<!DOCTYPE html>
<html>
    <head>
        <style>
            div{
                min-width: 100px;
                min-height: 100px;
                padding: 24px;
                border: 1px solid black;
                cursor: pointer;
            }
        </style>
    </head>
    <body>
        <h1>Hello Mohit</h1>
        <div>
            <ul id="categories">
                <li id="mobiles">mobiles</li>
                <li id="watches">watches</li>
                <li id="laptops">laptops</li>
            </ul>
        </div>

        <script src="./MyProgramme.js"></script>
    </body>
</html>
*/

// document.querySelector("#categories").addEventListener("click", (event)=>{
//     // console.log(event.target);
//     // console.log(event.currentTarget);
//     // window.localStorage.setItem("name","mohit")
//     // var myName = window.localStorage.getItem("name")
//     // console.log(myName);
//     if(event.target.tagName === "LI")
//     window.location.href = `https:xyz.com/${event.target.id}`
// })

/************************* End: Event Delegation *********************/


/************************* Start: Generator Function *********************/

/**
 * The function* declaration (function keyword followed by an asterisk) defines
 * a generator function, which returns a Generator object.
 *
 * The yield keyword is used to pause and resume a generator function
 * (function* or legacy generator function).
 */
// function* generator(i) {
//   yield i;
//   yield i + 10;
// }

// const gen0 = generator(10);

// console.log(gen0.next().value); // expected output: 10

// console.log(gen0.next().value); // expected output: 20
// console.log(gen0.next().value); // expected output: undefined



// function* generator2(i) {
//     yield i;
//     yield i + 10;
//     yield i + 120;
//     yield* otherGenerator(i)
//     yield i + 30;
//   }

//   function* otherGenerator(i) {
//     yield i + 1;
//     yield i + 2;
//   }

//   const gen = generator2(10);

//   console.log(gen.next().value);
//   // expected output: 10

//   console.log(gen.next().value);
//   // expected output: 20

//   console.log(gen.next().value);
//   // expected output: 130

//   console.log(gen.next().value);
//   // expected output: 11

//   console.log(gen.next().value);
//   // expected output: 12

//   console.log(gen.next().value);
//   // expected output: 40

//   function* logGenerator() {
//     console.log(0);
//     console.log(1, yield);
//     console.log(2, yield);
//     console.log(3, yield);
//   }

//   /**
//    * Passing arguments into Generators...
//    *
//    * read about generators from MDN docs
//    */
//   var gene = logGenerator();

//   // the first call of next executes from the start of the function
//   // until the first yield statement
//   gene.next();             // 0
//   gene.next('pretzel');    // 1 pretzel
//   gene.next('california'); // 2 california
//   gene.next('mayonnaise'); // 3 mayonnaise

/************************* End: Generator Function *********************/

/************************* Start: Memoization *********************/
// function memoizedAddTo256() {
//     var cache = {};
//     return function (num) {
//         console.log("cache...", cache);
//         if (cache.hasOwnProperty(num)) {
//             console.log("cached value", cache[num]);
//         }
//         else {
//             cache[num] = num + 256;
//             console.log("new value", cache[num]);
//         }
//     }
// }

// var memoizedFunc = memoizedAddTo256();

// memoizedFunc(20);
// memoizedFunc(20);
// memoizedFunc(30);
// memoizedFunc(20);
// memoizedFunc(30);
/**....Output of the above programme......
 * cache... {}
 * new value 276
 * cache... {20: 276}
 * cached value 276
 * cache... {20: 276}
 * new value 286
 * cache... {20: 276, 30: 286}
 * cached value 276
 * cache... {20: 276, 30: 286}
 * cached value 286
 */
/************************* End: Memoization *********************/

/************* Start: Spread Operator, Rest Parameter and Default Parameter **************/

// function sum(a, b, c) {
//     return a + b + c;
// }
// var args = [1, 2, 3];
// console.log(sum(...args)); // 6 // spread operator

//  /**
//   * look closley here, passing array as argument having 5 items in the sum function.
//   * and sum has only 3 parameter, so arr[0] is assigned to a, arr[1] is assigned to
//   * b and the addition arr[2] is assigned to c,
//   * and then a+b+c will be calculated and it prints 6
//   */
//   var args2 = [1, 2, 3, 4, 5];
//   console.log(sum(...args2)); // 6 // spread operator

//  /**
//   * look closley here,
//   */
//     var args2 = [1, 2, 3, 4, "hi"];
//     console.log(sum(...args2)); // 6 // spread operator

//     var args2 = ["hi",1, 2, 3, 4];
//     console.log(sum(...args2)); // hi12 // spread operator

//   function sum(...numbers) { //Rest parameter
//     var result = 0;
//     numbers.forEach(function (number) {
//       result += number;
//     });
//     return result;
//   }
//   console.log(sum(1)); // 1
//   console.log(sum(1, 2, 3, 4, 5)); // 15

//   function sum2(...numbers) { //Rest parameter
//     var result = 0;
//     numbers.forEach(function (number) {
//       result += number;
//     });
//     return result;
//   }
//   console.log(sum2(1)); // 1
//   console.log(sum2(1, 2, 3, 4, 'hi')); // 10hi

//   function sum3(...numbers) { //Rest parameter
//     var result = 0;
//     numbers.forEach(function (number) {
//       result += number;
//     });
//     return result;
//   }
//   console.log(sum3(1)); // 1
//   console.log(sum3('1', 2, 3, 4, 5)); // 012345//converts to string...

// ------- Visit once again very quick --------

// function mysum(a, b, c) {
//   return a + b + c;
// }
// var mysum_args = [1, 2, 3];
// console.log(mysum(...mysum_args)); // 6 // spread operator
// var mysum_args1 = [1, 2, 3, 4];
// console.log(mysum(...mysum_args1)); // 6 // spread operator
// var mysum_args2 = [1, 2, 3, 4, 5];
// console.log(mysum(...mysum_args2)); // 6 // spread operator
// var mysum_args3 = [1, 2, 3, "hi"];
// console.log(mysum(...mysum_args3)); // 6 // spread operator
// var mysum_args4 = ["hi", 1, 2, 3, 4, 5];
// console.log(mysum(...mysum_args4)); // hi12 // spread operator

// function mysum2(...number) {
//   let res = 0;
//   console.log(number);
//   number.forEach((itm) => {
//     res += itm;
//   });
//   console.log("sum2....", res);
// }

// /**
//  * Below Code: sum2.... 01,2,3 
//  * // this creates array of an array, so console.log(number) in above function is give Array[[1,2,3]]
//  */
// mysum2(mysum_args); 
// mysum2(mysum_args3); //sum2.... 01,2,3,hi
// mysum2(...mysum_args); //sum2.... 6
// mysum2(1, 2, 3, 4, 5); //sum2.... 15
// mysum2(...mysum_args3); // sum2.... 6hi

// function mysum3(a, b, ...number) {
//   let res = 0;
//   console.log(a); //1
//   console.log(b); //2
//   console.log(number); //[3,4,5]
//   number.forEach((itm) => {
//     res += itm;
//   });
//   console.log("sum3....", res);
// }

// mysum3(1, 2, 3, 4, 5); //12

// ------- Thanks for visiting ----------

//   /**
//    * Default paramenter
//    */
//   function inc(number, increment = 1) {
//     return number + increment;
//   }
//   console.log(inc(2, 2)); // 4
//   console.log(inc(2));    // 3

//   function sum(a, b = 2, c) {
//     return a + b + c;
//   }
//   console.log(sum(1, 5, 10));         // 16 -> b === 5
//   console.log(sum(1, undefined, 10)); // 13 -> b as default

//   function getDefaultIncrement() {
//     return 1;
//   }
//   function inc(number, increment = getDefaultIncrement()) {
//     return number + increment;
//   }
//   console.log(inc(2, 2)); // 4
//   console.log(inc(2));    // 3

/****************** End: Spread Operator, Rest Parameter and Default Parameter *************/

/****************** Start: sum(1)(2)(3)(4)...(n) *******************/

// const fn = sumNumber(1)(2)(3)(4)(5)(6)(7) //important
// console.log(fn());

// function sumNumber(item1){
//     return function(item2){
//         if(item2){
//             return sumNumber(item1 + item2)
//         }
//         return item1;
//     }
// }

/****************** End: sum(1)(2)(3)(4)...(n) *******************/

/****************** Start: Nested Destructuring *******************/
//  var data = {
//      user: {
//          name:{
//              fname:"Mohit",
//              lname:"Sharma",
//          }
//      }
//  }

//  const {user:{name:{fname: firstName = 'abc', lname: lastName = 'xyz'} ={}} = {}} = data;

//  console.log(firstName);
//  console.log(lastName);

/****************** END: Nested Destructuring *******************/

// /***************** Start: Sorting the Array of objects  ***********/

//  var myobj = [{
//     name: 'Mohit',
//     id: 233
// },
// {
//     name: 'Rohit',
//     id: 231
// },
// {
//     name: 'Aohit',
//     id: 234
// },
// {
//     name: 'Zohit',
//     id: 230
// },
// ]

// myobj.sort((a,b)=>{
//     return a.id-b.id // for acending and for desending b.id-a.id
// })

// console.log("myobj..",myobj);

// var myobj2 = [{
//     name: 'Mohit',
//     id: 233
// },
// {
//     name: 'Rohit',
//     id: 231
// },
// {
//     name: 'Aohit',
//     id: 234
// },
// {
//     name: 'Zohit',
//     id: 230
// },
// ]

// myobj2.sort((a,b)=>{
//     return a.name.toLowerCase()<b.name.toLowerCase() ? 
//     -1 : (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : 0)
// })

// console.log("myobj2..",myobj2);

/***************** End: Sorting the Array of objects  ***********/

/***************** Start: MAP, SET, Object Methods ***************/

// let m = new Map();
// m.set("Name","Mohit");
// m.set("id","333");
// m.set("address","Siwan");
// m.set("school","MSVM");
// m.set("college","BIT");
// m.set("Name","Rohit");
// console.log(m);
// console.log(m.entries());
// console.log(m.keys());
// console.log(m.values());
// console.log(m.has('college'));
// console.log(m.has('home'));
// console.log(m.get('college'));
// console.log(m.size);
// console.log(m.delete('college'));
// console.log(m.entries());
// console.log(m.delete('home'));
// console.log(m.entries());
// console.log("___________")
// for(let item of m.entries()){
//     console.log(item);
// }
// console.log("___________")
// for(let item of m.keys()){
//     console.log(item);
// }
// console.log("___________")
// for(let item of m.values()){
//     console.log(item);
// }
// console.log("___________")
// m.clear()
// console.log(m.entries());

/******/
// // Set won't take duplicate values or entries !!!
// let s = new Set();
// s.add("Mohit");
// s.add("333");
// s.add("Siwan");
// s.add("MSVM");
// s.add("BIT");
// s.add("Mohit");
// console.log(s);
// console.log(s.entries());
// console.log(s.keys());
// console.log(s.values());
// console.log(s.has('college'));
// console.log(s.has('Mohit'));
// //console.log(s.get('Mohit'));//Uncaught TypeError: s.get is not a function
// console.log(s.size);
// console.log(s.delete('BIT'));
// console.log(s.entries());
// console.log(s.delete('home'));
// console.log(s.entries());

// for(let item of s.entries()){
//     console.log(item);
// }

// for(let item of s.keys()){
//     console.log(item);
// }

// for(let item of s.values()){
//     console.log(item);
// }

// s.clear()
// console.log(s.entries());

/*****/

// var obj = {
//   fname: "mohit",
//   lname: "sharma",
//   address: "siwan",
//   class: "12th",
// };

// var obj1 = {
//   hobby: "cricket",
// };

// obj.__proto__ = obj1;

// Object.assign(obj, { state: "bihar" });

// console.log(obj);
// console.log(obj.state);
// console.log(obj.hobby);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// for (let item of Object.keys(obj)) {
//   console.log(item);
// }

// for (let item of Object.values(obj)) {
//   console.log(item);
// }

// for (let item of Object.entries(obj)) {
//   console.log(item);
// }

// for (let item in Object.keys(obj)) {
//   console.log(item);
// }

// for (let item in Object.values(obj)) {
//   console.log(item);
// }

// for (let item in Object.entries(obj)) {
//   // Object.entries, keys, values convert object into array, so for-in gives index,
//   // otherwise it will give key/property, like below for-in code.
//   console.log(item);
// }

// for (let item in obj) {
//   console.log(item);
// }

// for (let item in obj) {
//   console.log(obj[item]);
// }

// Object.defineProperty(obj, "gender", {
//  // this "gender" property wont be visible when we print obj's property via for-in or via for-of but 
//  // if some other object or property will be included to obj via prototype or object.assign() then
//  // it will be visible.
//  // i.e. if we print obj directly then we can see the properties included via object.assign() is there 
//  // and clearly visible.
//  // property included via prototype is inside [[Prototype]].
//  // and property included via defineProperty is there inside obj but not visible when printing via 
//  // for-in or for-of.
//  // check the output at line ########## and output of below code.
//   get: function () {
//     return gender;
//   },
//   set: function (value) {
//     gender = value;
//   },
// });

// obj.gender = "male";
// console.log(obj.gender);

// obj.gender = "alpha-male";
// console.log(obj.gender);

// console.log(obj); // check this.. important/////#########

// for (let item of Object.entries(obj)) {
//   console.log(item);
// }
// for (let item in obj) {
//   console.log(item); // you can clearly see that it is not printing the "gender" as key
// }
// for (let item in obj) {
//   console.log(obj[item]);
// }

/***************** End: MAP, SET, Object Methods ***************/

/************** Start : Important: plz go through it ************/

// let obj = {
//     name: "mohit",
//   };
//   function change2(obj) {
//     obj.name = "rohit";
//   }
//   change2(obj);
//   console.log(obj);

//   function change3(obj) {
//     obj = {
//       address: "Bihar",
//     };
//     console.log(obj);
//   }
//   change3(obj);
//   console.log(obj);

// function change4(ob) {
//     obj = {
//         address: "Siwan",
//     };
//     console.log(obj);
// }
// change4(obj);
// console.log(obj);

/************** End : Important: plz go through it ************/

/****** Start: Important example to understand arrow function, normal function
 ****** (declaration and expression) and this.
 ***************/

//  var length = 10;
//  var name = "rohit";

//  function fn() {
//    console.log(this.length);
//  }

//  const fn2 = () => {
//    // define in the global scope
//    console.log(this.length);
//  };

//  const shoppingList = {
//    length: 6,
//    name: "mohit",
//    getNumberOfItems: function (callback1, callback2) {
//      let f1 = callback1;
//      let f2 = callback2;
//      callback1(); //10

//       /** Below Code:  despite of arrow function because.. property of function is, it will 
//        * hold the "this"  where it is defined and both are defined in global.
//        * /
//      callback2(); //10, 
//      f1(); //10
//      f2(); //10
//      console.log(arguments[0]); // first callback function definition...
//      arguments[0](); //4... how??
//      console.log(this); // "this" will point to shoppingList
//      const inner = function () {
//        // "this" will point to global.
//        console.log(this.name);
//      };
//      const inner2 = () => {
//        // here "this" will point to shoppingList.
//        console.log(this.name);
//      };
//      inner();
//      inner2();
//    },
//    getNumberOfItems2: (callback1, callback2) => {
//      callback1(); //10
//      callback2(); //10, 
//      /** Above Code: despite of arrow function because.. property of function is, it will 
//       *  hold the "this" where it is defined and both are defined in global.
//       * /

//      // console.log(arguments[0]); // arrow function dont have argument, so it will give a error.
//      // arguments[0](); //10
//      console.log(this); // "this" will point to global
//      const inner = function () {
//        // here "this" will point to global
//        console.log(this.name);
//      };
//      const inner2 = () => {
//        // here "this" will point to global because dont use arrow function as methods
//        // and it will point to global;
//        console.log(this.name);
//      };
//      inner();
//      inner2();
//    },
//  };

//  shoppingList.getNumberOfItems(fn, fn2, 9, 5);
//  let ff = shoppingList.getNumberOfItems;
//  ff(fn, fn2, 9, 5);
//  shoppingList.getNumberOfItems2(fn, fn2, 9, 5);
//  let ff2 = shoppingList.getNumberOfItems2;
//  ff2(fn, fn2, 9, 5);

// ----------------------
// var len = 2
// var obj = {
//     len: 10,
//     pF: function () {
//         console.log(this.len);
//     }
// }
// obj.pF()// 10
// var pf1 = obj.pF;
// pf1(); // 2
// // --------------------
// var leng = 20;
// var pFF = function () {
//     console.log(this.leng);
// }
// pFF(); // 20
// var obj2 = {
//     leng: 100,
//     pF: function (pFF) {
//        pFF();
//     }
// }
// obj2.pF(pFF);// 20 but why not 100
// //-----------------
// var lengt = 209;
// var pFFF = () => {
//     console.log(this.lengt);
// }
// var pFFF2 = function(){
//     console.log(this.lengt);
// }
// pFFF(); // 209
// var obj3 = {
//     lengt: 1023,
//     pF: function (pFF) {
//         pFF();
//     }
//     op: pFFF,
//     opp: pFFF2
// }
// obj3.pF(pFFF); // 209 but why not 1023
// obj3.op(); // 209
// obj3.opp(); // 1023
// // Why function is loosing their "this" when accessing outside from obje like "pf1()" but 
// // not when passing function as callback and accessing inside obj.

/******
 ****** End: Important example to understand arrow function, normal function
 ****** (declaration and expression) and this.
 ******/

/*********** Start: Memoization Function which return function ***********/

// // if we are function expression then we should write before calling..so that why wrote here...
// var memoize = function (paramFunction) { 
//   let result = {};
//   return function (...args) {
//     if (result.hasOwnProperty(paramFunction)) {
//       return result[paramFunction];
//     } else {
//       let temp = paramFunction(...args);
//       result[paramFunction] = temp;
//       return temp;
//     }
//   };
// };

// var memoAdd = memoize((a, b) => a + b);
// console.log(memoAdd(1, 2)); //3
// console.log("after 1st memo function...");
// console.log(memoAdd(1, 2)); //3
// var memoSubstract = memoize((a, b) => a - b);
// console.log(".................");
// console.log(memoSubstract(3, 1)); //2
// console.log("after 2nd memo function...");
// console.log(memoSubstract(3, 1)); //2
// var memoDoMagic = memoize((a, b, c, d, e) => a - b + c + d - e - 2);
// console.log("..................");
// console.log(memoDoMagic(3, 1, 2, 2, 1)); //3
// console.log("after 3rd memo function...");
// console.log(memoDoMagic(3, 1, 2, 2, 1)); //3


// // ---- """""""" Better way """"""""""" --- 
// function memoize(paramFunction) {
//   let cache = {};
//   return function (...args) {
//     let key = JSON.stringify(args);
//     if (!cache.hasOwnProperty(key)) {
//       console.log("not from cache...");
//       cache[key] = paramFunction(...args);
//     }
//     return cache[key];
//   };
// }

// function calculateFibo(n) {
//   if (n === 0) {
//     return 0;
//   } else if (n === 1 || n === 2) {
//     return 1;
//   }

//   // else n is greater than two, return the sum of the previous two terms
//   // else return calculateFibo(n - 1) + calculateFibo(n - 2);
// }
// var factorialFibo = memoize(calculateFibo);
// console.log(factorialFibo(7));
// console.log(calculateFibo(7));

/*********** End: Memoization Function which return function ***********/

/********** Start: Memoization for async call ***************/

// function compute(a, b, isPass = true) {
//   // kind of API (Async calls) but we should only use memoization for GET call, not for 
//   // PUT, POST, DELETE
//   return new Promise((resolve, reject) => {
//     if (isPass) {
//       console.log("Compute call only first time for same input...");
//       setTimeout(() => {
//         resolve(a + b);
//       }, 3000);
//     } else {
//       console.log("Compute call only first time for same input...");
//       setTimeout(() => {
//         reject("failed!!!");
//       });
//     }
//   });
// }

// function customPromiseMemoize(paramFunction) {
//   let cache = {};
//   return async function (...args) {
//     let key = JSON.stringify(args);
//     if (cache[key] === undefined) {
//       try {
//         cache[key] = await paramFunction(...args);
//       } catch (err) {
//         delete cache[key];
//         return Promise.reject(err);
//       }
//     }
//     return Promise.resolve(cache[key]);
//   };
// }

//---------- Another way of writing the above function - My Favourite --------

// function customPromiseMemoize(callback) {
//     let cache = {}
//     return async function (...args) {
//         let key = JSON.stringify(args);
//         if (!cache.hasOwnProperty(key)) {
//             console.log("new");
//             cache[key] = await callback(...args);
//             return cache[key];
//         }
//         console.log("old");
//         return cache[key];
//     }

// }

//---------- Another way of writing the above function --------

// function customPromiseMemoize(paramFunction) {
//   let cache = {};
//   return function (...args) {
//     return new Promise((resolve, reject) => {
//       let key = JSON.stringify(args);
//       if (cache[key] === undefined) {
//         paramFunction(...args)
//           .then((res) => {
//             cache[key] = res;
//             resolve(cache[key]);
//           })
//           .catch((err) => {
//             reject(err);
//           });
//       } else resolve(cache[key]);
//     });
//   };
// }

// let computeAdd = customPromiseMemoize(compute);

// computeAdd(2, 3, false)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// computeAdd(2, 3)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// setTimeout(() => {
//   computeAdd(2, 3)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// }, 3000);

// setTimeout(() => {
//   computeAdd(4, 5)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// }, 4000);

// setTimeout(() => {
//   computeAdd(2, 3)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// }, 3000);

//..... Medium Link-https://medium.com/globant/memoize-javascript-promises-for-performance-1c77117fb6b8

/********** End: Memoization for async call ***************/

/************* Start: Polyfills for promise ***************/

// const get_number = function () {
//   return new Promise((resolve, reject) => {
//     let num = parseInt(Math.random() * 100);
//     setTimeout(() => {
//       if (num < 50) {
//         resolve(`yeah, Succeed... ${num}`);
//       } else {
//         reject(`yeah, failure... ${num}`);
//       }
//     }, 1500);
//   });
// };

// get_number()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

/**
 * Below Code-
 * Simple Custom Promise - which don't work for async calls like setTimeout.
 * Run and see.
 */

//  function CustomPromise(callback) {
//     let resolveVal;
//     let rejectVal;
//     function resolve(param) {
//         resolveVal = param
//     }

//     function reject(param) {
//         rejectVal = param
//     }

//     this.then = function (callback) {
//         if (resolveVal) callback(resolveVal)
//         return this;
//     }

//     this.catch = function (callback) {
//         if (rejectVal) callback(rejectVal)
//         return this
//     }

//     callback(resolve, reject)
// }

// CustomPromise.resolve = function (reason) {
//     return new CustomPromise((res, rej) => { res(reason) })
// }

// const randomNumber = function () {
//     return new CustomPromise((res, rej) => {
//         let num = parseInt(Math.random() * 100);
//         if (num > 50) {
//             res("CustomPromise-resolved-" + num)
//         } else {
//             rej("CustomPromise-error-" + num)
//         }
//     })
// }

// randomNumber().then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })

// const randomNumber2 = function () {
//     return new CustomPromise((res, rej) => {
//         let num = parseInt(Math.random() * 100);
//         if (num > 50) {
//             res("CustomPromise-resolved3-" + num)
//         } else {
//             rej("CustomPromise-error3-" + num)
//         }
//     })
// }

// randomNumber2().then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })

// CustomPromise.resolve("plz resolve").then(res => {
//     console.log(res);
// })

/**
 * Below Code-
 * Custom Promise - which works for async calls like settimeout.
 * Run and see.
 */

// function CustomPromisePolyFill(executorCallback) {
//   // custom promise
//   let fullfilled = false;
//   let called = false;
//   let value = null;

//   let onResolve = null;
//   let onReject = null;

//   function resolve(val) {
//     fullfilled = true;
//     value = val;
//     if (typeof onResolve === "function") {
//       onResolve(val);
//       called = true;
//     }
//   }

//   function reject(val) {
//     fullfilled = true;
//     value = val;
//     if (typeof onReject === "function") {
//       onReject(val);
//       called = true;
//     }
//   }

//   this.then = function (thenCallback) {
//     onResolve = thenCallback;
//     if (fullfilled && !called) {
//       onResolve(value);
//       called = true;
//     }
//     return this;
//   };

//   this.catch = function (catchCallback) {
//     onReject = catchCallback;
//     if (fullfilled && !called) {
//       onReject(value);
//       called = true;
//     }
//     return this;
//   };

//   executorCallback(resolve, reject);
// }

// CustomPromisePolyFill.resolve = (reason) => {
//   return new CustomPromisePolyFill(function executorCallback(resolve, reject) {
//     resolve(reason);
//   });
// };

// CustomPromisePolyFill.reject = (reason) => {
//   return new CustomPromisePolyFill(function executorCallback(resolve, reject) {
//     reject(reason);
//   });
// };

// const cust_get_number = function () {
//   return new CustomPromisePolyFill((resolve, reject) => {
//     let num = parseInt(Math.random() * 100);
//     setTimeout(() => {
//       if (num < 50) {
//         resolve(`yeah custom promise !!!, Succeed... ${num}`);
//       } else {
//         reject(`yeah custom promise !!!, failure... ${num}`);
//       }
//     }, 1500);
//   });
// };

// cust_get_number()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Promise.resolve("plz resolve!!").then((res) => console.log(res));
// CustomPromisePolyFill.resolve("plz resolve CustomPromisePolyFill !!").then(
//   (res) => console.log(res)
// );

// const get_number2 = function () {
//   return new Promise((resolve, reject) => {
//     let num = parseInt(Math.random() * 100);
//     setTimeout(() => {
//       if (num < 50) {
//         resolve(`yeah, get_number2 Succeed... ${num}`);
//       } else {
//         reject(`yeah, get_number2 failure... ${num}`);
//       }
//     }, 1500);
//   });
// };

// const get_number3 = function () {
//   return new Promise((resolve, reject) => {
//     let num = parseInt(Math.random() * 100);
//     setTimeout(() => {
//       if (num < 50) {
//         resolve(`yeah, get_number3 Succeed... ${num}`);
//       } else {
//         reject(`yeah, get_number3 failure... ${num}`);
//       }
//     }, 1500);
//   });
// };

// const cust_get_number2 = function () {
//   return new CustomPromisePolyFill((resolve, reject) => {
//     let num = parseInt(Math.random() * 100);
//     setTimeout(() => {
//       if (num < 50) {
//         resolve(`yeah, cust_get_number2 Succeed... ${num}`);
//       } else {
//         reject(`yeah, cust_get_number2 failure... ${num}`);
//       }
//     }, 1500);
//   });
// };

// const cust_get_number3 = function () {
//   return new CustomPromisePolyFill((resolve, reject) => {
//     let num = parseInt(Math.random() * 100);
//     setTimeout(() => {
//       if (num < 50) {
//         resolve(`yeah, cust_get_number3 Succeed... ${num}`);
//       } else {
//         reject(`yeah, cust_get_number3 failure... ${num}`);
//       }
//     }, 1500);
//   });
// };

/* --------- Custom Promise all ----------- */

// Promise.all([get_number2, get_number3])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// CustomPromisePolyFill.all = (...promiesArray) => {
//   let all_fullfilled = [];
//   let one_reject = null;
//   return new CustomPromisePolyFill(function executorCallback(resolve, reject) {
//     promiesArray.forEach((element) => {
//       element
//         .then((resp) => {
//           all_fullfilled.push(resp);
//           if (promiesArray.length === all_fullfilled.length) {
//             resolve(all_fullfilled); // here order will not be same
//           }
//         })
//         .catch((err) => reject(one_reject));
//     });
//   });
// };

/*_______________ One more way to write promise all (here order will be same) ______________*/

// CustomPromisePolyFill.all = (promiseArray) => {
//     let allResolved = Array(promiseArray.length).fill(null);
//     return new Promise((resolve, reject) => {
//         promiseArray.forEach((element, index) => {
//             element().then(res => {
//                 allResolved[index] = res; //here order will be same
//                 if (!allResolved.includes(null)) {
//                     resolve(allResolved)
//                 }
//             }).catch(err => {
//                 reject(err)
//             })
//         });
//     })
// }

// CustomPromisePolyFill.all([cust_get_number2, cust_get_number3])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

/*_______________ One more way to write promise all ______________*/
// function all(promises) {
//   let temp = new Array(promises.length).fill(null);
//   return new Promise((resolve, reject) => {
//     promises.forEach((element, index) => {
//       element
//         .then((resp) => {
//          // don't push, use the index as it should maintain the order in which promises are in 
//          // their's array position.
//           // temp.push(resp); 
//           temp[index] = resp;
//           if (!temp.includes(null)) {
//                resolve(temp);
//           }
//         })
//         .catch((err) => reject(err));
//     });
//   });
// }
// var p1 = Promise.resolve(1);
// var p2 = Promise.resolve(2);
// var p3 = Promise.resolve(3);
// all([p1, p2, p3]).then((res) => {
//   console.log(res);
// });
// var p11 = Promise.resolve(1);
// var p12 = Promise.reject("Rejected");
// var p13 = Promise.resolve(3);
// all([p11, p12, p13]).then((res) => {
//   console.log(res);
// }).catch((err) => console.log(err));

// ----- polyfills for promise.race -------

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("1st resolved");
//   }, 600);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("2nd resolved");
//   }, 500);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("3rd resolved");
//   }, 400);
// });
// const p4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("4th rejected !!!");
//   }, 300);
// });

// customRace([p1, p2, p4])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err); // this will be exceuted // 4th rejected !!!
//   });
// customRace([p1, p2, p3])
//   .then((res) => {
//     console.log(res); // this will be exceuted // 3rd resolved
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// function customRace(arr) {
//   return new Promise((resolve, reject) => {
//     arr.forEach((element) => {
//       element
//         .then((res) => {
//           return resolve(res);
//         })
//         .catch((err) => {
//           return reject(err);
//         });
//     });
//   });
// }

//------- polyfills for promise.any---------
// const p11 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("1st resolved");
//   }, 600);
// });
// const p12 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("2nd rejected !!!");
//   }, 500);
// });
// const p13 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("3rd rejected !!!");
//   }, 400);
// });
// const p14 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("4th rejected !!!");
//   }, 300);
// });

// customAny([p11, p12, p13, p14])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err); // this will be exceuted // 4th rejected !!!
//   });
// customAny([p14, p12, p13])
//   .then((res) => {
//     console.log(res); // this will be exceuted // 3rd resolved
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// function customAny(arr) {
//   let err_result = [];
//   return new Promise((resolve, reject) => {
//     arr.forEach((element, index) => {
//       element
//         .then((res) => {
//           return resolve(res);
//         })
//         .catch((err) => {
//           err_result.push(err);
//           if (err_result.length === arr.length) return reject(err_result);
//         });
//     });
//   });
// }

/************* End: Polfills for promise ***************/

/************ Start: deeper level implementation of lodash _get function(Walmart asked) *******/

// for getting a data from nested object !!!

// function getData(obj, str, defaultVal) {
//   // deeper level implementation of lodash _get function(Walmart asked)
//   let tempArr = str.split(".");
//   let index = 0;
//   let curr_obj = obj;
//   for (let prop in curr_obj) {
//     const value = obj[prop];
//     if (typeof value === "object" && tempArr[index] == prop) {
//       tempArr.shift();
//       return getData(value, tempArr.join("."), defaultVal);
//     } else if (
//       typeof value !== "object" &&
//       tempArr[index] == prop &&
//       tempArr.length === 1
//     ) {
//       return value;
//     }
//   }
//   return defaultVal;
// }

//******* above and below getData doing same thing and below one is straight forward.

// function getData(obj, str, dVal) {
//   let array = str.split(".");
//   let curr_obj = obj;
//   array.forEach((element) => {
//     curr_obj = curr_obj[element];
//   });
//   if (curr_obj === undefined) return dVal;
//   return curr_obj;
// }

// var obj = {
//   fname: "mohit",
//   lname: "sharma",
//   address: {
//     city: {
//       lane: {
//         lane_name: "Circuit Road",
//       },
//     },
//     state: "KA",
//     country: "india",
//   },
// };
// console.log(getData(obj, "lname", "default"));
// console.log(getData(obj, "mname", "usha"));
// console.log(getData(obj, "address.state", "MH"));
// console.log(getData(obj, "address.state.lane", "1st lane"));
// console.log(getData(obj, "address.city.lane.lane_name", "nice road"));

//------------best way of doing------------

// var obj = {
//     a: {
//         b: {
//             c: 12,
//             j: false
//         },
//         k: null
//     }
// };

// function findPath(obj, str){
//     let arr=str.split('.');
//     let curr={...obj};
//     for(let i=0;i<arr.length;i++){
//         if(curr[arr[i]]!==undefined){
//           curr=curr[arr[i]]
//         }else{
//             return undefined;
//         }
//     }
//     return curr;
// }

// console.log(findPath(obj, 'a.b.c')); // 12
// console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
// console.log(findPath(obj, 'a.b.d')); // undefined
// console.log(findPath(obj, 'a.c')); // undefined
// console.log(findPath(obj, 'a.b.c.d')); // undefined
// console.log(findPath(obj, 'a.b.c.d.e')); // undefined
// console.log(findPath(obj, 'a.b.j')); //false
// console.log(findPath(obj, 'a.b.j.k')); //undefined
// console.log(findPath(obj, 'a.k')); //null

// function extract(obj, str) {
//   let arr = str.split(".");
//   let curr = obj;
//   for (let i = 0; i < arr.length; i++) {
//     if (curr[arr[i]] !== undefined) {
//       curr = curr[arr[i]];
//     } else {
//       return `${arr[i]} is not present in the Object`;
//     }
//   }
//   return curr;
// }

// var obj = {
//   a: {
//     b: {
//       c: {
//         d: {
//           e: 12,
//         },
//       },
//     },
//   },
//   x: {
//     y: 13,
//   },
// };

// var str = "a.b.c";
// var str1 = "a.b.c.d.e";
// var str2 = "a.b.x";
// var str3 = "x.y";
// console.log(extract(obj, str));
// console.log(extract(obj, str1));
// console.log(extract(obj, str2));
// console.log(extract(obj, str3));

/************ End: deeper level implementation of lodash _get function(Walmart asked) *******/

/**** Start:
 * Write a function which takes function and time and if it is resolved in given time
 * then throw "Resolve" or if not then throw "Reject" !!!!
 */

// function customPromise(time, callback) {
//   return Promise.race([
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(callback());
//       }, time);
//     }),
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject("rejected !!!!");
//       }, 800);
//     }),
//   ]);
// }
// function delayedHello() {
//   return "Delayed !!!";
// }
// customPromise(1800, delayedHello) // rejected
//   .then((resp) => {
//     console.log(resp);
//   })
//   .catch((err) => console.log(err));

// customPromise(700, delayedHello) // delayed
//   .then((resp) => {
//     console.log(resp);
//   })
//   .catch((err) => console.log(err));

// ----- another example ------

// my_custom_promise(addFn, 1, 2, 200)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// my_custom_promise(addFn, 1, 2, 1200)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// function addFn(a, b) {
//   return a + b;
// }

// function my_custom_promise(callback, param1, param2, time) {
//   return Promise.race([
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(callback(param1, param2));
//       }, time);
//     }),
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject("Failed !!!");
//       }, 500);
//     }),
//   ]);
// }

/**** End:
 * Write a function which takes promise and time and if it is resolved in given time
 * then throw "Resolve" or if not then throw "Reject" !!!!
 */

/****** Start: Dot notion to Object (V. IMP) **************/

// Input: ["a.2", "d.5"] or {"a":"2", "d":"5"}
// Output: { A: 2, D: 5 }

// Input: ["a.b.12", "d.c.55"] or {"a.b":"12", "d.c":"55"]}
// Output: { A: { B: 12 }, D: { C: 55 } }

// Input: ["a.b.12", "a.b.c.4", "d.c.55"] or {"a.b":"12", "a.b.c":"4", "d.c":"55"}
// Output: { A: { B: { C: 4 } }, D: { C: 55 } }

// console.log(
//     deepen({
//         "a.c.e": "foo",
//         "a.c.f": "bar",
//         "a.g": "foo2",
//     })
// );
// console.log("---");
// console.log(
//     deepen({
//         "a.c": "123",
//         "a.c.e": "foo",
//         "a.c.f": "bar",
//         "a.g": "foo2",
//     })
// );

// console.log("---");
// console.log(
//     deepen({
//         "a.c": "123",
//         "d.c": "55",
//         "q.w.t": "155",
//         "a.c.e": "34",
//         "a.c.e.x": "384",
//         "a.g": "35",
//         "a.c.f": "90",
//         "a.b.f": "94"
//     })
// );
// function deepen(paramObj) {
//     let result = {}
//     for (let key in paramObj) {
//         let lastVal = paramObj[key];
//         let keyArr = key.split(".");
//         createObjFun(result, keyArr, lastVal);
//     }
//     return result;
// }

// function createObjFun(result, keyArr, lastVal) {
//     let curr = result;
//     //console.log("result", result);
//     for (let i = 0; i < keyArr.length; i++) {
//         let eachKey = keyArr[i];
//         if (curr.hasOwnProperty(eachKey)) {
//             if (i < keyArr.length - 1) {
//                 if (typeof (curr[eachKey]) === "object")
//                     curr = curr[eachKey];
//                 else {
//                     curr[eachKey] = {};
//                     curr = curr[eachKey];
//                 }
//             } else {
//                 curr[eachKey] = lastVal;
//             }
//         } else {
//             if (i < keyArr.length - 1) {
//                 curr[eachKey] = {};
//                 curr = curr[eachKey];
//             } else {
//                 curr[eachKey] = lastVal;
//             }
//         }
//     }
// }
/****** End: Dot notion to Object (V. IMP) **************/

/********* Start : see this example.... Very Important ****/
//-----Closure------
// function counter() {
//   let count = 0;
//   function increment(val) {
//     count = count + val;
//     return count;
//   }
//   return [count, increment];
// }
// var [count, increment] = counter();
// console.log(count);
// console.log(increment(3));
// console.log(count);
// console.log(increment(4));
// console.log(count);

/********* End : see this example.... Very Important ****/

/******* Start: Own promise... V.Imp *********/
// var p = new myCustomPromise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     resolve(2);
//   }, 500);
//   console.log(3);
// });
// p.then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

// var q = new myCustomPromise((resolve, reject) => {
//   console.log(11);
//   resolve(12);
//   console.log(13);
// });
// q.then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

// var w = new myCustomPromise((resolve, reject) => {
//   console.log("err1");
//   reject("got an error");
//   console.log("err2");
// });
// w.then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

// function myCustomPromise(callback) {
//   let resolveVal;
//   let errVal;
//   let onResolve = null;
//   let onReject = null;
//   function resolve(val) {
//     resolveVal = val;
//     if (resolveVal && typeof onResolve === "function") onResolve(resolveVal);
//   }
//   function reject(err) {
//     errVal = err;
//     if (errVal && typeof onReject === "function") onReject(errVal);
//   }
//   this.then = function (thenCallBack) {
//     onResolve = thenCallBack;
//     if (resolveVal) onResolve(resolveVal);
//     return this;
//   };
//   this.catch = function (catchCallback) {
//     onReject = catchCallback;
//     if (errVal) onReject(errVal);
//     return this;
//   };
//   callback(resolve, reject);
// }

/******* End: Own promise... V.Imp *********/

/********* Start: Imp question (Adobe asked) ************/
//------------ Uncomment this, below or both and check ------
// let dataString = getData(); // synchronus data fetching
// //----either above dataString or below
// let dataString;
// getData().then((res) => {// asynchronus data fetching
//   dataString = res;
// });
// let count = 0;
// let id = setInterval(() => {
//   let dataS = JSON.stringify(dataString);
//   let id = document.getElementById("div_1"); // create one div in HTML with id "div_1"
//   let addFn = () => {
//     id.innerHTML = dataS + ":" + count;
//   };
//   count++;
//   addFn();
//   if (count >= 10) {
//     //id.parentElement.remove(); // enable this and check....
//   }
// }, 1000);
// function getData() {
//   //....asynchronus data return...
//   return Promise.resolve("GOD IS GREAT."); // either this or just below line
//   //return "GOD IS GREAT."; // either this or just above line (synchronus data return)
// }
//--------------Uncomment this or either above and check-------
// let dataString = getData(); // synchronus data fetching
// //----either above dataString or below
// let dataString;
// getData().then((res) => {// asynchronus data fetching
//   dataString = res;
// });
// let count = 0;
// let dataS = JSON.stringify(dataString);
// let id = document.getElementById("div_1");// create one div in HTML with id "div_1"
// let addFn = () => {
//   id.innerHTML = dataS + ":" + count;
// };
// count++;
// addFn();
// function getData() {
//   //....asynchronus data return...
//   return Promise.resolve("GOD IS GREAT."); // either this or just below line
//   //return "GOD IS GREAT."; // either this or just above line (synchronus data return)
// }
//-------------------------
/********* End: Imp question (Adobe asked) ************/

/********* Start: Guess the output (Adobe asked) ************/
//------Check for every addEventListener...
//------and check the output.....
// _______ TYPE 1_________
// let id = document.getElementById("div_1");
// function clickHandler(str) {
//   // we can use arrow function too
//   console.log(str);
//   id.innerHTML = str;
// }
// id.addEventListener("click", clickHandler("God is great !!!"));
// id.removeEventListener("click", (event) => {// // this removeEventListener wont work.. Type 6 will work
//   clickHandler("God is great !!!");
// });

// //_______ TYPE 2_________
// let id = document.getElementById("div_1");
// const clickHandler = (str) => {
//   console.log(str);
//   id.innerHTML = str;
// };
// id.addEventListener("click", (event) => {
//   console.log("God is great !!!");
//   id.innerHTML = "God is great !!!";
// });
// // this removeEventListener wont work.. Type 6 will work
// id.removeEventListener("click"); // removeEventListener takes two argument.
// //_______ TYPE 3_________
// let id = document.getElementById("div_1");
// const clickHandler = (str) => {
//   console.log(str);
//   id.innerHTML = str;
// };
// id.addEventListener("click", (event) => {
//   clickHandler("God is great !!!");
// });
// //this removeEventListener wont work.. Type 6 will work
// id.removeEventListener("click"); // removeEventListener takes two argument.
// //______ TYPE 4_________
// let id = document.getElementById("div_1");
// function clickHandler2() {
//   id.innerHTML = "I am fine";
// }
// id.addEventListener("click", clickHandler2);
// //this removeEventListener wont work.. Type 6 will work
// id.removeEventListener("click", (event) => {
//   clickHandler("God is great !!!");
// });
// // __________TYPE 5_______
// let id = document.getElementById("div_1");
// id.addEventListener("click", {
//   handleEvent: function (event) {
//     // handleEvent should be there.. we can rename it like handleEvent2 or any other name..
//     id.innerHTML = "God is great !!!";
//   },
// });
// //this removeEventListener wont work.. Type 6 will work
// id.removeEventListener("click");//removeEventListener takes two argument.

// // _______ TYPE 6_________
// {/*
//     <div id="div_1"></div>
//     <button id="button">remove</button>
// */}
// let id = document.getElementById("div_1");
// let button = document.getElementById("button");
// let count = 0;
// function clickHandler() {
//   // we can use arrow function too
//   count++;
//   console.log("god is kind!!!");
//   id.innerHTML = "god is kind : " + count;
// }
// // only in this case removeHandler will work...
// // uncomment other addEventListener and check....
// id.addEventListener("click", clickHandler); \
// //---------------
// id.addEventListener("click", () => {
//   clickHandler();
// });
// //---------------
// function removeHandler() {
//   id.removeEventListener("click", () => {});
// }
// //---------------
// function removeHandler() {
//     // takes two param(1st is click or onmouseover and 2nd the function which we want to remove)
//   id.removeEventListener("click", clickHandler);
// }
// button.addEventListener("click", removeHandler);

/********* End: Guess the output (Adobe asked) ************/

/********* Start: Write conditional eval function (Adobe asked) ************/

// eval(
//   'let c=1;if(c==1){console.log("value:", c)}else{console.log("inside else")}'
// );
// eval(
//   'let c=2;if(c==1){console.log("value:", c)}else{console.log("inside else")}'
// );
// function createString(conditionStr, actionStr) {
//   let resultString = "";
//   if (c == 1) {
//     resultString = "let c=1;if(" + conditionStr + "){" + actionStr + "}";
//   } else {
//     resultString = 'console.log("inside else")';
//   }
//   return resultString;
// }
// let c = 1;
// eval(createString("c==1", 'console.log("value:", c)'));

// let d = 2;
// eval(createString("d==1", 'console.log("value:", d)')); // print empty string

/********* End: Write conditional eval function (Adobe asked) ************/

/*
 ************ Start : Debounce implementation & Throttlling implementation *******
 */

// let counter = 0;
// function apiCall(context, arg) {
//   var text = document.getElementById("textTyped").value;
//   console.log("Async calls..", counter++);
//   // console.log("calling API calls2 ->",text);
// }

// var debounce = betterFunction(apiCall, 300);

// function betterFunction(callback, delay) {
//   let timer;
//   return function (...args) {
//     let context = this;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       callback.apply(context, args);
//     }, delay);
//   };
// }

// let counter2 = 0;
// function apiCall2(context, arg) {
//   var text = document.getElementById("textTypedTh").value;
//   console.log("Async calls throttle..", counter2++);
//   // console.log("calling API calls2 ->",text);
// }

// var throttle = betterFunction2(apiCall2, 500);

// function betterFunction2(callback, delay) {
//   let flag = true;
//   let timer;
//   return function (...args) {
//     if (flag) {
//       flag = false;
//       let context = this;
//       callback.apply(context, args);
//       timer = setTimeout(() => {
//         flag = true;
//       }, delay);
//     }
//   };
// }

/********** End : Debounce implementation & Throttlling implementation ***********/

/********* Start: Array flat *************/

// var arr = [0, [1, 2], 3, [4, 5, [6], 7, [8, [9, [10]]]]];

// Array.prototype.myFlat = function () {
//     let flatArr = [];
//     let currArr = this;
//     innerFlat(currArr);
//     function innerFlat(a) {
//         a.forEach((element, index) => {
//             if (typeof (element) !== 'object') {
//                 flatArr.push(element)
//             } else {
//                 innerFlat(element);
//             }
//         });
//     }
//     return flatArr;
// }



// console.log(arr.myFlat());//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// --- Another Important Array Flat Example ----
/**
 * Problem statement - Flat the array till the level given
 */
// let arr = [
//     [1, 2], // level 1
//     [3, 4], // level 1
//     [5, 6,  // level 1
//         [7, // level 2
//             [8, 9] // level 3
//         ],
//     10], // level 1
// ];


// flatArr(arr, 2) // output - [1, 2, 3, 4, 5, 6, 7,[ 8, 9], 10]
// flatArr(arr, 3) // output - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// flatArr(arr, 1) // output - [1, 2, 3, 4, 5, 6, [7, [8, 9]], 10]

// function flatArr(arr, level) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let curr = arr[i];
//         inner(curr, level, result, 1)
//     }
//     console.log(result);
// }

// function inner(arr, level, result, currLevel) {
//     if (level < currLevel) {
//         result.push(arr);
//     } else {
//         for (let j = 0; j < arr.length; j++) {
//             let inn = arr[j];
//             if (typeof inn !== 'object') {
//                 result.push(inn);
//             } else {
//                 inner(inn, level, result, currLevel + 1)
//             }
//         }
//     }
// } 

/********* End: Array flat *************/

/****** Start: predicts the output... *******/
/**
 * ______________
 */
// var noti = 1;
// console.log(`${noti} is my ${noti !== 1 && 's'}`);

/**
 * ______________
 */
// const map = ['a', 'b', 'c'].map.bind([1, 2, 3]);
// var res = map(item => item);
// console.log(res.join(''));

/**
 * -----------------
 */
//  var person = {
//     address: "bangalore",
//     fname: "mohit",
//     lname: "sharma",
//     printD: function () {
//       console.log(`${this.fname} ${this.lname} ${this.address}`);
//     },
//     printD2: () => {
//       console.log(`${this.fname} ${this.lname} ${this.address}`);
//     },
//     printD3: function () {
//       const count = 123;
//       return () => {
//         console.log(`${this.fname} ${this.lname} ${this.address} ${count}`);
//       };
//     },
//   };
//   person.printD();
//   person.printD2();
//   person.printD3()();
//   var fname = "Rohit";
//   var address = "kolkata";
//   const count = 876;
//   const fn1 = person.printD;
//   fn1();
//   const fn2 = person.printD2;
//   fn2();
//   const fn3 = person.printD3;
//   fn3()();

// ----- another example----
// const a = ()=>{
//     console.log("a ", this);
//     const b = ()=>{
//         console.log("b ", this);
//         const c = {
//             d:function(){
//                console.log("d ", this); 
//             }
//         }
//         c.d();
//     }
//     b();

// }

// a();

// (function () {
//     var aa = bb = 3;
// })();

// console.log(aa);
// console.log(bb);
/****** End: predicts the output... *******/
