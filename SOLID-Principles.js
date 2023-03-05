/**
 * SOLID Principles-
 * Principles which solve common problem which software developers encounter day-in day-out.
 * or
 * Idea which gives you flexibilities to reuse code.
 *
 * SOLID stands for-
 *   S - Single Responsibility Principle
 *   O - Open Close Principle
 *   L - Liskov Substitution Principle
 *   I - Interface Segregation Principle
 *   D - Dependency Inversion Principle
 *
 * Benifits of SOLID-
 * 1. The code reusability.
 * 2. Easy to make a code change in the feature.
 * 3. Keeps the code easy to maintain.
 * 4. Easy to write a test for the code
 *
 *
 * Now we will see each of them one by one. Plz be with me. Hahahahahah !!!!!
 * ref -
 *     1. https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa
 *     2. https://hackernoon.com/understanding-solid-principles-in-javascript-w1cx3yrv
 *     3. https://blog.logrocket.com/solid-principles-single-responsibility-in-javascript-frameworks/
 *     4. https://javascript.plainenglish.io/solid-principle-in-javascript-part-1-4f67d8f9a31f
 *     5. https://www.youtube.com/watch?v=m2GCb-x8e5s
 *     6. https://www.youtube.com/watch?v=MSq_DCRxOxw
 */


/************** Start - S for "Single Responsibility Principle" **************/
/**
 * Single responsibility principle-
 * A class should have one and only one reason to change, meaning that a class should only have
 * one job.
 */

// class Car {
//     constructor(name, model, year) {
//         this.name = name
//         this.model = model
//         this.year = year
//     }
//     getCar(id) {
//         return this.http.get('api/cars/' + id)
//     }
//     saveCar() {
//         return this.post('api/cars', { name: this.name, year: this.year, model: this.model })
//     }
// }

/**
 * The above example violates the single responsibility principle. Why? The Car model was meant
 * to hold/represent a car, but it has a getCar method that fetches a car from the internet.
 * That gives it another responsibility of getting cars from an endpoint.
 *
 * A line needs to be drawn on the responsibility of the Car class: will it be used as a model
 * or as an object?
 *
 * If we touch either the saveCar or getCar methods to make a change, this change may force us
 * to redesign the Car model either by adding an extra property or adding another thing in the
 * Car class. If we forget to do this, that application may break in unpredictable ways.
 *
 * We can separate the responsibilities to different classes:
 */

// class Car {
//     constructor(name, model, year) {
//         this.name = name
//         this.model = model
//         this.year = year
//     }
// }
// class CarService {
//     getCar(id) {
//         return this.http.get('api/cars/' + id)
//     }
//     saveCar(car) {
//         this.http.post('api/cars', car)
//     }
// }

/**
 * As you can see from this example, we now have the responsibilities separated. Now, the Car
 * model manages a car and the CarService has the responsibility of getting and saving cars from
 * an endpoint.
 *
 * If a class has more than one responsibility, the responsibilities become coupled. Changes to
 * one responsibility may inhibit the class’s ability to meet the others. This kind of coupling
 * leads to fragile designs that break in unexpected ways when changed.
 */

//------------------------ Another Example -----------------------

// function Employee(name, pos, hours) {
//     this.name = name;
//     this.pos = pos;
//     this.hours = hours;

//     this.calculatePay = function () {
//         // code goes here...
//     }

//     this.reportHours = function () {
//         // code goes here...
//     }

//     this.save = function () {
//         // code goes here...
//     }
// }

/**
 * Let assume that we have an Employee object, it has three functions: calculatePay(),
 * reportHours() and save().
 *
 * Unfortunately, it is violating the SRP because those three functions are responsible for
 * three different actors.
 *
 * The calculatePay() function is responsible for the accounting department.
 * The reportHours() function is used by the human resources department.
 * The save() function is specified by the database administrators.
 * So, the way to avoid this problem is to separate code that supports different actors.
 *
 * The EmployData object to save a shared simple data structure, it used by all three actors.
 *
 */

// function Employee2(name, pos, hours) {
//     this.name = name;
//     this.pos = pos;
//     this.hours = hours;
// }

// function payCalculater(empData) {
//     this.empData = empData;
//     this.calculatePay = function () {
//         // code goes here...
//     }
// }

// function hoursReporter(empData) {
//     this.empData = empData;
//     this.reportHours = function () {
//         // code goes here...
//     }
// }

// function EmployeeServer(empData) {
//     this.empData = empData;
//     this.save = function () {
//         // code goes here...
//     }
// }

/**
 * It is how we use the SRS to refactor bad codes. Each function is responsible for a specific
 * actor. The SRP is one of the simplest of the principles, and one of the hardest to get right.
 */


/************** End - S for "Single Responsibility Principle" **************/

/************** Start - O for "Open Close Principle" **************/
/**
 * Open-closed Principle -
 * Objects or entities should be open for extension, but closed for modification.
 *
 * Open for extension means that we should be able to add new features or components to the
 * application without breaking existing code.
 *
 * Closed for modification means that we should not introduce breaking changes to existing
 * functionality, because that would force you to refactor a lot of existing code.
 *
 */

/**
 * Let assume that every employee has a role and granted privileges. But how if we introduce a
 * new role to the system and don’t modify existing things. So rather we can do like the below
 * example to make it pass the OCP.
 */

// let allowedRoles = ["CEO", "CFO", "CTO", "STAFF"];

// function checkPriviledge(employee) {
//     if (allowedRoles.includes(employee.role)) {
//         // employee has priviledge
//         return true;
//     } else {
//         return false
//     }
// }

// //new functionality added to add the role without changing directly to the "allowedRoles" array
// function addRoles(role) {
//     allowedRoles.push(role);
// }

/**
 * So as the above example, we don’t have to modify the existing code rather we can extend it to add a new role. The OCP is one of the driving forces behind the architecture of systems. The goal is to make the system easy to extend without incurring a high impact of change.
 */

/************** End - O for "Open Close Principle" **************/

/************** Start - L for "Liskov Substitution Principle" **************/
/**
 * Objects in a program should be replaceable with instances of their subtypes without altering
 * the correctness of that program. -Wikipedia
 *
 * This principle sticks to the OOP concept and it told about the way we create an abstraction
 * and define relationships between parent class (supertype) and child class (subtype). If the
 * child class cannot perform the same actions as its parent class it can happen an unknown
 * issue in the future.
 */

// see the below example which voilates the Liskov Principle
// class Bird {
//     fly() {
//         // code
//     }
//     layEggs() {
//         //code
//     }
// }

// class Eagle extends Bird {
//     airDive() {
//         //code
//     }
// }

// class Penguine extends Bird { // penguine can't fly
//     swim() {
//         //code
//     }
// }
/**
 * Eagle extends the Bird class so its property and Penguine too but Penguine can't fly
 * so extends the Bird class is bad idea as fly() has no use for "Penguine",
 * so its voilates the Liskov Substitution Principle.
 *
 * For acheiving that we need to refactor the code as below.
 */

// class Bird1 {
//     layEggs() {
//         // code
//     }
// }

// class FlyingBirds extends Bird1 {
//     fly() {
//         // code
//     }
// }
// class SwimmingBird extends Bird1 {
//     swim() {
//         // code
//     }
// }

// class Eagle extends FlyingBirds {
//     airDive() {
//         //code
//     }
// }

// class Penguine extends SwimmingBird {
//     deepWaterSwim() {
//         //code
//     }
// }

/************** End - L for "Liskov Substitution Principle" **************/

/************** Start - I for "Interface Segregation Principle" **************/
/**
 * Interface segregation principle -
 * A client should never be forced to implement an interface that it doesn’t use or clients
 * shouldn’t be forced to depend on methods they do not use.
 *
 * Taking a simple example to understand the ISP -
 * Suppose if you enter a restaurant and you are pure vegetarian. The waiter in that restaurant
 * gave you the menu card which includes vegetarian items, non-vegetarian items, drinks, and
 * sweets. In this case, as a customer, you should have a menu card which includes only
 * vegetarian items, not everything which you don’t eat in your food.
 *
 * Here the menu should be different for different types of customers. The common or general
 * menu card for everyone can be divided into multiple cards instead of just one. Using this
 * principle helps in reducing the side effects and frequency of required changes.
 *
 *
 * How to implement the ISP in JavaScript?
 * Because we don’t have an interface by default in JavaScript. But we all would have faced
 * situations where we want to do so many things on the constructor of a class. So, how to
 * implement the ISP now?
 *
 * Let’s say some settings we have to do in the constructor. The settings we do should be
 * segregated from the other unwanted settings in the constructor.
 */

// class User {
//     constructor(name) {
//         this.name = name;
//         this.getMenu();
//     }
//     getMenu() {
//         console.log("-----Menu----");
//         console.log("Egg Omlete");
//         console.log("Chicken Kimma");
//         console.log("Roti Sabji");
//         console.log("Parota Bhaji");
//         console.log("Rabadi");
//         console.log("Halwa");
//         console.log("Mutton");
//         console.log("Ducks");
//     }
// }

// var user = new User("mohit");

// /**
//  * I am vegetarian and Most of the items are not for me.
//  * so Segregate it based upon the uses or type of customer..
//  */

// class User1 {
//     constructor(name, veg) {
//         this.name = name;
//         if (veg)
//             this.getVegMenu();
//         else
//             this.getGeneralMenu();
//     }

//     getVegMenu() {
//         console.log("-------Menu-----");
//         console.log("Roti Sabji");
//         console.log("Parota Bhaji");
//         console.log("Pav Bhaji");
//         console.log("------- Sweets Section ------");
//         console.log("Rabadi");
//         console.log("Halwa");
//     }

//     getGeneralMenu() {
//         console.log("------- Veg Menu ------");
//         console.log("Roti Sabji");
//         console.log("Parota Bhaji");
//         console.log("Pav Bhaji");
//         console.log("------- Non Veg Menu ------");
//         console.log("Egg Omlete");
//         console.log("Chicken Kimma")
//         console.log("------- Sweets Section ------");
//         console.log("Rabadi");
//         console.log("Halwa");
//     }
// }

// var user1 = new User1("mohit", true);
// var user2 = new User1("Rohit", false);
/************** End - I for "Interface Segregation Principle" **************/

/************** Start - D for "Dependency Inversion Principle" **************/
/**
 * Before we discuss this topic keep in mind that Dependency Inversion and Dependency Injection
 * both are different concepts. Most of the people get confused about it and consider both are
 * the same. Now key points are here to keep in mind about this principle.
 *
 * The Dependency Inversion Principle (DIP) tells us that the most flexible systems are those in
 * which source code dependencies refer only to abstractions, not to concretions. Rather,
 * details should depend on policies.
 *
 *
 * Looking at a real-life example
 * You can consider the real-life example of a TV remote battery. Your remote needs a battery
 * but it’s not dependent on the battery brand. You can use any XYZ brand that you want and it
 * will work. So we can say that the TV remote is loosely coupled with the brand name.
 * Dependency Inversion makes your code more reusable.
 */

// look this example...

// function callApi(url) {
//     axios.get(url).then(res => {
//         this.setState({
//             key1: res.data.key1,
//             key2: res.data.key2
//         })
//     })
// }

// callApi("https://xyz/api");
/**
 * so when we use "callApi" and setting the states inside that function then we can see
 * settting the state functionality is tightly coupled with "callApi" and we can' reuse
 *
 * so we can modify the code to stop voilating the "Dependency Inversion Principle"
 *
 * below code follows "Dependency Inversion Principle" by creating "settingStates" function
 * to set the data and it is not tightly coupled with "callApi2" and same "settingStates"
 * function can be reused by another function having same requirement.
 */

// function callApi2(url, settingStates) {
//     axios.get(url).then(res => {
//         settingStates(res.data)
//     })
// }

// function settingStates(data) {
//     this.setState({
//         key1: data.key1,
//         key2: data.key2
//     })
// }

// callApi2("https://xyz/api");

/************** End - D for "Dependency Inversion Principle" **************/


