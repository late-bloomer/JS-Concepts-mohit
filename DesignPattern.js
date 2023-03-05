/**
 * Design Patterns -
 * In software engineering, a software design pattern is a general, reusable solution to a
 * commonly occurring problem within a given context in software design. It is not a finished
 * design that can be transformed directly into source or machine code. Rather, it is a
 * description or template for how to solve a problem that can be used in many different
 * situations. Design patterns are formalized best practices that the programmer can use to
 * solve common problems when designing an application or system.
 *
 * Object-oriented design patterns typically show relationships and interactions between
 * classes or objects, without specifying the final application classes or objects that are
 * involved. Patterns that imply mutable state may be unsuited for functional programming
 * languages. Some patterns can be rendered unnecessary in languages that have built-in
 * support for solving the problem they are trying to solve, and object-oriented patterns
 * are not necessarily suitable for non-object-oriented languages.
 *
 * Design patterns may be viewed as a structured approach to computer programming intermediate
 * between the levels of a programming paradigm and a concrete algorithm.
 *
 *
 * Plz refer -
 *     1. https://fireship.io/lessons/typescript-design-patterns/
 *     2. https://www.freecodecamp.org/news/javascript-design-patterns-explained/
 *     3. https://www.youtube.com/watch?v=tv-_1er1mWI
 *     4. https://github.com/WebDevSimplified/Design-Patterns
 *     5. https://www.dofactory.com/javascript/design-patterns/decorator
 */

/**
 *
 * There are total 23 patterns and few are written below.
 *
 * Types of Design Patterns -
 *      1. Creational - Talks about mechanism for Object Creation.
 *          1.1. Singleton Pattern
 *          1.2. Factory Pattern
 *          1.3. Prototype Pattern
 *          1.4. Constructor Pattern
 *          1.5. Builder Pattern
 *
 *      2. Structural - how objects relates to eachother i.e. Structural patterns refer to how
 *                      to assemble objects and classes into larger structures.
 *          2.1. Proxy Pattern
 *          2.2. Decorator Pattern
 *          2.3. Adapter Pattern
 *          2.4. Bridge Pattern
 *          2.5. Composite Pattern
 *          2.6. Facade
 *
 *      3. Behavioural - Tell about how objects are communicating with eachother.
 *          3.1. State Pattern
 *          3.2. Observer Pattern
 *          3.3. Visitor Pattern
 *          3.4. Iterator Pattern
 *
 *
 */

/************************* Start: Creational Pattern and its type *************/
/*************** Start: Builder Pattern **************/
/**
 * reference -
 * https://www.youtube.com/watch?v=M7Xi1yO_s8E&list=PLZlA0Gpn_vH_CthENcPCM0Dww6a5XYC7f&index=3
 *
 */

// class Address {
//     constructor(zip, street) {
//         this.zip = zip;
//         this.street = street;
//     }
// }

// class User {
//     constructor(name, age, ph, address) {
//         this.name = name;
//         this.age = age; // this is an optional property.
//         this.ph = ph; // this is an optional property
//         this.address = address;
//     }
// }

// const user = new User("Mohit", undefined, undefined, new Address(560045, "Ghar ke piche"));
// console.log(user);
/**
 * Look closely, age and ph are optional properties, so no need to assign those values.
 * but in the "new User(....)", we need to pass as undefined.
 * or suppose we need to dynamically add the property to user.
 * So here "builder pattern" comes into rescue.
 *
 * With Builder pattern, we can dynamically add the property to the user.
 *
 * refer the below code.
 */

// class AnotherUser {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class UserBuilder {
//     constructor(name) {
//         this.user = new AnotherUser(name);
//     }
//     set(name, value) {
//         this.user[name] = value;
//         return this;
//     }
//     build() {
//         return this.user;
//     }
// }

// const user_2 = new UserBuilder("Dhoni").set("age", "abhi to mai jawan hu !!!").set("phone", "9798484766").set("address", new Address(560045, "Ghar ke piche")).build();
// console.log(user_2);

// //-------- Another example ------------

// class UserBuilder2 {
//     constructor(name) {
//         this.name = name;
//     }
//     set(name, value) {
//         this[name] = value;
//         return this;
//     }
//     build() {
//         return this;
//     }
// }

// const user_22 = new UserBuilder2("Kohli").set("age", "40 !!!").set("address", new Address(560045, "Ghar ke niche")).build();
// console.log(user_22);

/*************** End: Builder Pattern **************/

/*************** Start: Singleton Pattern **************/
/**
 * reference -
 * https://www.youtube.com/watch?v=sJ-c3BA-Ypo&list=PLZlA0Gpn_vH_CthENcPCM0Dww6a5XYC7f&index=4
 *
 *
 * "Singleton pattern" has a class which is instanciated only once and we can't add/delete any
 * property or method after 1st instance.
 *
 * this is very useful to set project configuration which will be used by other component or
 * class or object of project.
 *
 * look the below code.
 *
 */

//---------------------- Two differnt instance ------------------------
// class Logger {
//     constructor() {
//         this.logs = [];
//     }

//     addLog(val) {
//         this.logs.push(val);
//         console.log("log is added !!! ",val);
//     }

//     count() {
//         console.log("count is-",this.logs.length);
//     }
// }



// function first() {
//     const logger = new Logger();
//     logger.count()
//     logger.addLog(21)
//     logger.count()
//     logger.printFun = function () {
//         console.log("Trying to add new function");
//     }
//     console.log(logger);
// }

// first()

// console.log("---------------");

// function second() {
//     const logger = new Logger();
//     logger.count()
//     logger.addLog(28)
//     logger.count()
//     console.log(logger);
// }

// second()

//------------------- Singleton Pattern ---------------------

// class Logger {
//     constructor() {
//         if (Logger.instance == null) { // "instance" is a static variable 
//             this.logs = [];
//             Logger.instance = this;
//         }
//         return Logger.instance;
//     }

//     addLog(val) {
//         this.logs.push(val);
//         console.log("log is added: ", val);
//     }

//     count() {
//         console.log("count is: ", this.logs.length);
//     }
// }

// const logger = new Logger();
// Object.freeze(logger);

// const logger2 = new Logger(); // returning same instance;

// logger2.name = "mohiit"
// console.log(logger2.name); // undefined as 1st instance is freezed

// logger.printFun = function () {
//     console.log("Trying to add new function");
// }
// console.log(logger);


// function first() {
//     logger.count();
//     logger.addLog(10);
//     logger.count();
//     console.log(logger);
// }

// first()

// console.log("------------");

// function second() {
//     logger2.count()
//     logger2.addLog(122)
//     logger2.count()
//     console.log(logger);
// }

// second()


//----- Another example of "Singleton pattern" using factory function ---------
// function Person(name) {
//     this.name = name;
// }
// var Singleton = (function () {
//     var instance;

//     function createInstance(name) {
//         var person = new Person(name);
//         return person;
//     }

//     return {
//         getInstance: function (name) {
//             if (!instance) {
//                 instance = createInstance(name);
//             }
//             return instance;
//         }
//     };
// })();

// function run() {

//     var instance1 = Singleton.getInstance("mohit");
//     var instance2 = Singleton.getInstance("rumit");

//     console.log("Same instance? " + (instance1 === instance2));
//     console.log(instance1.name); //mohit
//     console.log(instance2.name); //mohit... not rumit
// }

// run()

/*************** End: Singleton Pattern **************/

/************** Start: Factory Pattern and Constructor Pattern ***************/

/**
 * The Factory method pattern provides an interface for creating objects that can be modified
 * after creation. The cool thing about this is that the logic for creating our objects is
 * centralized in a single place, simplifying and better organizing our code.
 *
 * In JavaScript, any function can return a new object. When it’s not a constructor function or
 * class, it’s called a factory function.
 */

//------- Using classes -------

// class Alien {
//     constructor(name, phrase) {
//         this.name = name
//         this.phrase = phrase
//         this.species = "alien"
//     }
//     fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
//     sayPhrase = () => console.log(this.phrase)
// }

// const alien1 = new Alien("Mohit", "I'm Mohit the alien!")
// console.log(alien1.name) // output: "Mohit"


//------------- Using a Constructor function --------------

// function Alien2(name, phrase) {
//     this.name = name
//     this.phrase = phrase
//     this.species = "alien"
// }

// Alien2.prototype.fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
// Alien2.prototype.sayPhrase = () => console.log(this.phrase)

// const alien2 = new Alien2("Mohit", "I'm Mohit the alien!")

// console.log(alien2.name) // output "Mohit"
// console.log(alien2.phrase) // output "I'm Mohit the alien!"
// alien2.fly() // output "Zzzzzziiiiiinnnnnggggg"

//------------- Using a Factory function --------------

// function Alien3(name, phrase) {
//     return {
//         name: name,
//         phrase: phrase
//     }
// }

// const alien3 = Alien3("Mohit", "I'm Mohit the alien!")

// console.log(alien3.name) // output "Mohit"
// console.log(alien3.phrase) // output "I'm Mohit the alien!"
// alien3.sayPhrase = function () {
//     console.log(this.phrase + " Its Factory !!")
// }

// alien3.sayPhrase() // output "I'm Mohit the alien! Its Factory !!"

//---------Abstract Factory Pattern-----------

/**
 * Abstract Factory Pattern
 * The Abstract Factory pattern allows us to produce families of related objects without
 * specifying concrete classes. It's useful in situations where we need to create objects that
 * share only some properties and methods.
 *
 * The way it works is by presenting an abstract factory the client interacts with. That
 * abstract factory calls the corresponding concrete factory given the corresponding logic. And
 * that concrete factory is the one that returns the end object.
 *
 * Basically it just adds an abstraction layer over the factory method pattern, so that we can
 * create many different types of objects, but still interact with a single factory function or
 * class.
 *
 */

// We have a class or "concrete factory" for each vehicle type
// class Car {
//     constructor() {
//         this.name = "Car"
//         this.wheels = 4
//     }
//     turnOn = () => console.log("Chacabúm!!")
// }

// class Truck {
//     constructor() {
//         this.name = "Truck"
//         this.wheels = 8
//     }
//     turnOn = () => console.log("RRRRRRRRUUUUUUUUUMMMMMMMMMM!!")
// }

// class Motorcycle {
//     constructor() {
//         this.name = "Motorcycle"
//         this.wheels = 2
//     }
//     turnOn = () => console.log("sssssssssssssssssssssssssssssshhhhhhhhhhham!!")
// }

// // And and abstract factory that works as a single point of interaction for our clients
// // Given the type parameter it receives, it will call the corresponding concrete factory
// const vehicleFactory = {
//     createVehicle: function (type) {
//         switch (type) {
//             case "car":
//                 return new Car()
//             case "truck":
//                 return new Truck()
//             case "motorcycle":
//                 return new Motorcycle()
//             default:
//                 return null
//         }
//     }
// }

// const car = vehicleFactory.createVehicle("car") // Car { turnOn: [Function: turnOn], name: 'Car', wheels: 4 }
// console.log(car);
// const truck = vehicleFactory.createVehicle("truck") // Truck { turnOn: [Function: turnOn], name: 'Truck', wheels: 8 }
// console.log(truck);
// const motorcycle = vehicleFactory.createVehicle("motorcycle") // Motorcycle { turnOn: [Function: turnOn], name: 'Motorcycle', wheels: 2 }
// console.log(motorcycle);

/************** End: Factory Pattern and Constructor Pattern ***************/

/************* Start: Prototype Pattern **********/

/**
 * Prototype Pattern -
 * The Prototype pattern allows you to create an object using another object as a blueprint
 * inheriting its properties and methods.
 *
 * If you've been around JavaScript for a while, you're probably familiar with prototypal
 * inheritance and how JavaScript works around it.
 */

// // We declare our prototype object with two methods
// const enemy = {
//     attack: () => console.log("Pim Pam Pum!"),
//     flyAway: () => console.log("Flyyyy like an eagle!")
// }

// // We declare another object that will inherit from our prototype
// const bug1 = {
//     name: "Buggy McFly",
//     phrase: "Your debugger doesn't work with me!"
// }

// // With setPrototypeOf we set the prototype of our object
// Object.setPrototypeOf(bug1, enemy)

// // With getPrototypeOf we read the prototype and confirm the previous has worked
// console.log(Object.getPrototypeOf(bug1)) // { attack: [Function: attack], flyAway: [Function: flyAway] }

// console.log(bug1.phrase) // Your debugger doesn't work with me!
// bug1.attack() // Pim Pam Pum!
// bug1.flyAway()// Flyyyy like an eagle!

// ---------- Another Example ------------
// var person = {
//     fname: "Mohit",
//     printf: function () {
//         console.log(`${this.fname}+ is my name.`);
//     }
// }

// var address = {
//     city: "bangalore",
//     printAdd: function () {
//         console.log(`I am in ${this.city}`);
//     }
// }

// Object.assign(person.__proto__, address)

// // Use any one of these given below -
// //    1. Object.assign(person.__proto__, address) or 
// //    2. person.__proto__ = Object.create(address) or
// //    3. Object.setPrototypeOf(person, address)
// // All will do the same.

// console.log(person);
// console.log(person.city);
// console.log(Object.getPrototypeOf(person))


/************* End: Prototype Pattern **********/
/************************* End: Creational Pattern and its type *************/



/************************* Start: Structural Pattern and its type *************/
/************* Start: Facade Pattern **********/

/**
 * The Facade pattern provides a simplified interface to a library, a framework, or any other
 * complex set of classes.
 *
 * Well...we can probably come out with lots of examples for this, right? I mean, React itself
 * or any of the gazillion libraries out there used for pretty much anything related to software
 * development. Specially when we think about declarative programming, it's all about providing
 * abstractions that hide away complexity from the eyes of the developer.
 *
 * A simple example could be JavaScript's map, sort, reduce and filter functions, which all work
 * like good 'ol for loops beneath the hood.
 *
 * Another example could be any of the libraries used for UI development nowadays, like MUI. As
 * we can see in the following example, these libraries offer us components that bring built-in
 * features and functionalities that help us build code faster and easier.
 *
 * Below -
 * I am taking the example of getFetch(...). Its implementation is hidden for outside and
 * we just need to use without bother about implementation.
 *
 */

// function getUsers() {
//     return getFetch('https://jsonplaceholder.typicode.com/users')
//   }

//   function getUserPosts(userId) {
//     return getFetch('https://jsonplaceholder.typicode.com/posts', {
//       userId: userId
//     })
//   }

//   getUsers().then(users => {
//     users.forEach(user => {
//       getUserPosts(user.id).then(posts => {
//         console.log(user.name)
//         console.log(posts.length)
//       })
//     })
//   })

//   function getFetch(url, params = {}) { // Facade Pattern
//     const queryString = Object.entries(params).map(param => {
//       return `${param[0]}=${param[1]}`
//     }).join('&')
//     return fetch(`${url}?${queryString}`, {
//       method: "GET",
//       headers: { "Content-Type": "application/json" }
//     }).then(res => res.json())
//   }

//---- when we use axios ---------  
//   function getFetch(url, params = {}) {
//     return axios({
//       url: url,
//       method: "GET",
//       params: params
//     }).then(res => res.data)
//   }

/************* End: Facade Pattern **********/

/************* Start: Adapter Pattern **********/
/**
 * Adapter Pattern-
 * The Adapter allows two objects with incompatible interfaces to interact with each other.
 *
 * Let's say, for example, that your application consults an API that returns XML and sends that
 * information to another API to process that information. But the processing API expects JSON
 * You can't send the information as it's received since both interfaces are incompatible. You
 * need to adapt it first. 😉
 *
 * We can visualize the same concept with an even simpler example. Say we have an array of
 * cities and a function that returns the greatest number of habitants any of those cities have
 * The number of habitants in our array is in millions, but we have a new city to add that has
 * its habitants without the million conversion:
 */

// // Our array of cities
// const citiesHabitantsInMillions = [
//     { city: "London", habitants: 8.9 },
//     { city: "Rome", habitants: 2.8 },
//     { city: "New york", habitants: 8.8 },
//     { city: "Paris", habitants: 2.1 },
// ]

// // The new city we want to add
// const BuenosAires = {
//     city: "Buenos Aires",
//     habitants: 3100000
// }

// // Our adapter function takes our city and converts the habitants property to the same format all the other cities have
// const toMillionsAdapter = city => { city.habitants = parseFloat((city.habitants / 1000000).toFixed(1)) }

// toMillionsAdapter(BuenosAires)

// // We add the new city to the array
// citiesHabitantsInMillions.push(BuenosAires)

// // And this function returns the largest habitants number
// const MostHabitantsInMillions = () => {
//     return Math.max(...citiesHabitantsInMillions.map(city => city.habitants))
// }

// console.log(MostHabitantsInMillions()) // 8.9


/************* End: Adapter Pattern **********/

/************* Start: Decorator Pattern **********/
/**
 * The Decorator pattern lets you attach new behaviors to objects by placing them inside wrapper
 * objects that contain the behaviors. If you're somewhat familiar with React and higher order
 * components (HOC) this kind of approach probably rings a bell for you.
 *
 * Technically, components in React functions, not objects. But if we think about how React
 * Context or Memo we can see that we're passing a component as a child to this HOC, and thanks
 * to that this child component is able to access certain features.
 *
 * Like we can see in the ContextProvider component is receiving children as props and
 * providing extra functionality to it's children
 *
 * Note: Decorators are a structural design pattern that aim to promote code reuse.
 * Classically, Decorators offered the ability to add behavior to existing classes in a system
 * dynamically. The idea was that the decoration itself wasn't essential to the base
 * functionality of the class; otherwise, it would be baked into the superclass itself.
 *
 * They can be used to modify existing systems where we wish to add additional features to
 * objects without the need to heavily modify the underlying code using them. A common reason
 * why developers use them is that their applications may contain features requiring a large
 * quantity of distinct types of object.
 *
 */


// A vehicle constructor
// function vehicle(vehicleType) {

//     // some sane defaults
//     this.vehicleType = vehicleType || "car";
//     this.model = "default";
//     this.license = "00000-000";

// }

// // Test instance for a basic vehicle
// var testInstance = new vehicle("car");
// console.log(testInstance);

// // Outputs:
// // vehicle: car, model:default, license: 00000-000

// // Lets create a new instance of vehicle, to be decorated
// var truck = new vehicle("truck");

// // New functionality we're decorating vehicle with
// truck.setModel = function (modelName) {
//     this.model = modelName;
// };

// truck.setColor = function (color) {
//     this.color = color;
// };

// // Test the value setters and value assignment works correctly
// truck.setModel("CAT");
// truck.setColor("blue");

// console.log(truck);

// // Outputs:
// // vehicle:truck, model:CAT, color: blue

// // Demonstrate "vehicle" is still unaltered
// var secondInstance = new vehicle("car");
// console.log(secondInstance);

// // Outputs:
// // vehicle: car, model:default, license: 00000-000

/**
 * In order to keep your initial Objects or Components untouched you can implement Decorator
 * Pattern concept to extend their functionality
 */

//----- Another Example ---------
// var User = function (name) {
//     this.name = name;

//     this.say = function () {
//         console.log("User: " + this.name);
//     };
// }

// var DecoratedUser = function (user, street, city) {
//     this.user = user;
//     this.name = user.name;  // ensures interface stays the same
//     this.street = street;
//     this.city = city;

//     this.say = function () {
//         console.log("Decorated User: " + this.name + ", " +
//             this.street + ", " + this.city);
//     };
// }

// function run() {

//     var user = new User("Kelly");
//     user.say();

//     var decorated = new DecoratedUser(user, "Broadway", "New York");
//     decorated.say();
// }

// run()

/************* End: Decorator Pattern **********/

/************* Start: Proxy Pattern **********/
/**
 * Proxy Pattern -
 * The Proxy pattern provides a substitute or placeholder for another object. The idea is to
 * control access to the original object, performing some kind of action before or after the
 * request gets to the actual original object.
 *
 * Again, if you're familiar with ExpressJS this probably rings a bell for you. Express is a
 * framework used to develop NodeJS APIs, and one of the features it has is the use of
 * Middlewares. Middlewares are nothing more than pieces of code we can make execute before, in
 * the middle, or after any request reaches our endpoints.
 *
 */
/************* End: Proxy Pattern **********/

/************************* End: Structural Pattern and its type *************/

/************************* Start: Behavioural Pattern and its type *************/
/**
 * Behavioral Design Patterns-
 * Behavioral patterns control communication and the assignment of responsibilities between
 * different objects.
 */

/************* Start: Iterator Pattern **********/
/**
 * Iterator Pattern-
 * The iterator is used to traverse elements of a collection. This might sound trivial in
 * programming languages used nowadays, but this wasn't always the case.
 *
 * Anyway, any of the JavaScript built in functions we have at our disposal to iterate over data
 * structures (for, forEach, for...of, for...in, map, reduce, filter, and so on) are examples of
 * the iterator pattern.
 *
 * Same as any traversing algorithm we code to iterate through more complex data structures like
 * trees or graphs.
 *
 * Custom Array map is the example of iterator pattern
 */

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

// var arr2 = arr.myCustMap((item)=>item*2)
// console.log("arr2...",arr2);

/************* End: Iterator Pattern **********/

/************* State: Observer Pattern **********/
/**
 * Observer Pattern-
 * The observer pattern lets you define a subscription mechanism to notify multiple objects
 * about any events that happen to the object they’re observing. Basically, it's like having an
 * event listener on a given object, and when that object performs the action we're listening
 * for, we do something.
 *
 * React's useEffect hook might be a good example here. What useEffect does is execute a given
 * function at the moment we declare.
 *
 * The hook is divided in two main parts, the executable function and an array of dependencies
 * If the array is empty, like in the following example, the function gets executed each time
 * the component is rendered.
 *
 * useEffect(() => { console.log('The component has rendered') }, [])
 *
 * If we declare any variables within the dependency array, the function will execute only when
 * those variables change.
 *
 * useEffect(() => { console.log('var1 has changed') }, [var1])
 *
 * Even plain old JavaScript event listeners can be thought of as observers. Also, reactive
 * programming and libraries like RxJS, which are used to handle asynchronous information and
 * events along systems, are good examples of this pattern.
 */
/************* End: Observer Pattern **********/

/************* Start: State Pattern **********/
/**
 * The State pattern provides state-specific logic to a limited set of objects in which each
 * object represents a particular state. This is best explained with an example.
 *
 * Refer - https://medium.com/frontend-canteen/simplify-your-object-with-state-pattern-in-javascript-8674ff46edb1
 *
 */

// class Light {
//     constructor() {
//         this.state = 'off'
//     }

//     clickButton() {
//         if (this.state === 'off') {
//             console.log('turn on the light')
//             this.state = 'on'
//         } else if (this.state === 'on') {
//             console.log('turn off the light')
//             this.state = 'off'
//         }
//     }
// }
// let lgt = new Light()
// lgt.clickButton()
// lgt.clickButton()
// lgt.clickButton()

/************* End: State Pattern **********/

/************************* End: Behavioural Pattern and its type *************/
