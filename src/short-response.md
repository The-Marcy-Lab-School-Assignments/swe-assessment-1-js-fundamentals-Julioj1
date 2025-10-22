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


### Question 4


### Question 5


### Question 6


### Question 7


### Question 8

