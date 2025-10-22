# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

---

## Section 1: Short Response

### Question 1

```javascript
const react = (isReuben) => {
  if (isReuben) {
    let currentStatus = 'Everything is just fine';
  } else {
    let currentStatus = 'Time to panic.'
  }
  
  console.log(currentStatus);
}

react(true);
```
#### Error

In this code the error is that the variable `currentStatus` is declared in the scope of the `if` statement and another variable with the same name is declared in the scope of the `else` statement, at the end it's trying to `console.log(currentStatus)` but it does not work because it does not exist in the scope of the function in other words it's trying to access a variable private to the scope of the `if` and `else`; this is a referenceError, also this is creating two different variables not one, if you want this code to work you should do this:

```javascript
const react = (isReuben) => {
    let currentStatus = "";
    if (isReuben) {
        currentStatus = 'Everything is just fine';
    } else {
        currentStatus = 'Time to panic.'
    }
  
  console.log(currentStatus);
}

react(true);
```
Here what i'm doing is creating the variable in the scope of the function so it can be accessed by all the elements in the function not just the `if` and `else`, so I created the variable and assigned it's value to an empty `string` so it can be later reassigned to the desired outcome.

### Question 2

What does the following code log? Explain why.

```javascript
let bestPlayer = { name: "Lebron James" };
let theGOAT = bestPlayer;
bestPlayer.name = "Michael Jordan";
console.log(theGOAT.name);
```
This code logs: `"Michael Jordan"`.

#### Why

Let me guide you step by step - First we create an `object` called **`bestPlayer`** with the property `name` and value `Lebron James`. Then we create a variable `theGOAT` and assign **`bestPlayer`** to it after that we change the property `name` in **`bestPlayer`** using dot notation to `"Michael Jordan"` so when we log `theGOAT.name` it will log the changed property `name` that is now `"Michael Jordan"`.

### Question 3

What does the following code log? Explain why.

```javascript
const theHustler = 'Laisha';

const shoutOut = () => {
  const theHustler = 'Paul';
  console.log(`${theHustler} is the hardest working person in the room.`);
}

shoutOut();
console.log(`${theHustler} is also the hardest working person in the room.`);
```
It will log: `Paul is the hardest working person in the room.
Laisha is also the hardest working person in the room.`

What happens here is that we create a `global` variable `theHustler` and assign Laisha to it, then inside the shoutOut function we declare the same variable but assign it a different value `Paul` the difference between the two is that `Paul` can only be used inside the function, so it changed the value of `theHustler` just inside the function it does not interfere with the `console.log()` outside the function.

### Question 4

#### Rest Parameters

* What is the purpose of "rest parameters"?  
* How do we turn a parameter into a rest parameter and use them in functions? 
* Illustrate the use of rest parameters by writing a function called `sum` that takes *any* number of integers as arguments and returns their sum.

```javascript
sum(1, 2, 10); // 13
sum(5); // 5
sum(100, 200, 800, 1, 1, 1); // 1103;
``` 
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
* A function definition can only have one rest parameter.
* The rest parameter must be the last parameter in the function definition.

```javascript
const sum = (...nums) => {
    let total = 0;
    for (const num of nums){
        total += num;
    }
    return total;
}
``` 
### Question 5
Imagine you are teaching a brand new programmer a brief lesson about **scope**. Your lesson should have the following components:

* A definition of scope.
* An analogy ("You can think of scope like ...")  
* A short code snippet that demonstrates scope (make sure to wrap it in triple backticks)  
* An explanation of your example

#### Scope

The **scope** is the current context of execution in which `values` and expressions are "visible" or can be referenced. If a `variable` or expression is not in the current scope, it will not be available for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

JavaScript has the following kinds of scopes:

* Global scope: The default scope for all code running in script mode.
* Module scope: The scope for code running in module mode.
* Function scope: The scope created with a function.

A `function` creates a scope, so that a variable defined exclusively within the function cannot be accessed from outside the function or within other functions.

You can think of **scope** like a backpack If there is a pencil `inside` a backpack that is not yours you cannot use it but if the pencil is `outside` anyone can use the pencil.
```javascript
const globalVariable = 'Julian';

const shoutOut = () => {
  const privateVariable = 'Alejandro';
  console.log(`${privateVariable} this variable is only accessible for the elements in the function.`);
}

shoutOut();
console.log(`${globalVariable} this variable is accessible by every element in the code. Including the function.`);
``` 
### Question 6
Imagine you are teaching a brand new programmer a brief lesson about **modules**. Your lesson should have the following components:

* A definition of modules in your own words.
* An explanation of the benefits of using modules in your code.
* An example showing how to export and import modules in Node along with an explanation of the example. 

#### Modules
A module is a file containing code, which can then be `imported` and utilized in other parts of a larger program or system.

In other words if you are doing a big program with a lot of functions a lot of different `functionalities` instead of putting everything in just one place you can separate them into smaller pieces in different files for example you have functions which their purpose is to **add, substract or divide** you can put them in a file called operations and then have a function to give you the results of this operations in another file, it gives you better readability and organization. 

```javascript
const sum = (num1, num2) => num1 + num2;

const sub = (num1, num2) => num1 + num2;

module.exports = {
  sum,
  sub,
};
//This is the first file.
//Here I created two functions 1 to add and one to substract.
//Then exported them at the bottom. with
// module.exports = {
//   sum,
//   sub,
// };
//I used this sintax because there are two functions, if it was only one we would do "module.exports = sum" and the same with the sub;
```
```javascript
const { sum, sub } = require('../src/operations.js');
const prompt = require('prompt-sync')()

const results = () => {
    const sum(num1) = prompt('First number to add: ');
    const sum(num2) = prompt('Second number to add: ');
    const sub(num1) = prompt('First number to substract: ')
    const sub(num2) = prompt('Second number to substract: ')
    sum(num1, num2);
    sub(num1, num2);
}
results();
//This would be the second file, here I imported the previous file with const { sum, sub } = require('../src/operations.js');
//I use the prompt to get the numbers and then get the results.
```
### Question 7

Consider the function `removeLastPurely`. It is a **pure function**.

```javascript
const removeLastPurely = (arr) => {
  const arrCopy = [...arr];
  arrCopy.pop();
  return arrCopy;
}

const fruits = ['apple', 'banana', 'cherry', 'date'];
const fruitsMinusOne = removeLastPurely(fruits);
```

After this code runs, explain what values will be held by `fruits` and `fruitMinusOne`.

Then, explain why it is necessary to make a copy of the array in order to make it a pure function. 

Finally, explain why we would want to avoid mutating the input array itself (why would we want the function to be pure?).

#### Pure Function

**Values held by fruits:**
[ 'apple', 'banana', 'cherry', 'date' ]

**Values held by fruitMinusOne:**
[ 'apple', 'banana', 'cherry' ]

It is neccessary to make a copy of the array to make a **pure function** because that way it does not mutate the array pure functions don't change the values it assigns it to a new array, contrary to impure functions which gives you the array back but the contents are not the same.
#### **Why would we want the function to be pure?**

If you still want to work with the same array, like students grades you want to keep the contents the same and just adjust some minor details, if you change it completely you might forget what were you comparing.

### Question 8

