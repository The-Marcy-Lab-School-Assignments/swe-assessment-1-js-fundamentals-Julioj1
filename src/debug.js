/*
  Fix the bugs in the following functions!

  Read the comments to understand what each function should do.
  Run the tests to see what's failing.
  Fix the code to make all tests pass.
*/

// ============================================
// Question 1: fixVariables
// ============================================
// This function should print and return a message based on temperature

const fixVariables = (temp) => {
  if (temp < 30) {
    const msg = 'Pretty chilly.';
  } else if (temp < 70) {
    const msg = 'Not bad.';
  } else if (temp < 100) {
    const msg = 'On the hot side.';
  } else {
    const msg = 'I will die of heat.';
  }
  console.log(msg);
  console.log("And that's how I feel about the temp!");
  return msg;
};

// ============================================
// Question 2: doubleAllItemsPurely
// ============================================
// This function should return a NEW array with all values doubled
// It should NOT mutate the original array

const doubleAllItemsPurely = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }
  return arr;
};

// ============================================
// Question 3: sumArray
// ============================================
// This function should take in an array of numbers and return the sum of all the numbers

const sumArray = (nums) => {
  let total = 0;
  for (let i = [0]; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}

// ============================================
// Exports
// ============================================

module.exports = {
  fixVariables,
  doubleAllItemsPurely,
  sumArray,
};
