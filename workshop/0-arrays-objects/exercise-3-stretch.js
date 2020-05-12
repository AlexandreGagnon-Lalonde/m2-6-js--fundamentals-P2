// Exercise 3
// -------------------
// In the very first exercise, you logged a top-10 list of foods:

let mostPopularFood = [
  'bean burritos',
  'poke bowl',
  'chicken sliders',
  'pork baby back ribs',
  'chicken burritos',
  'chicken sandwich',
  'cauliflower rice bowl',
  'chicken and waffle sliders',
  'parmesan chicken',
  'buffalo-flavored cauliflower',
];

// Let's log them again, but this time with a proper "count-down". We should
// Start at #10, and go down to #1.
// There should be a **1 second delay** between each console.log. It should
// take 10 seconds to count from the 10th-best food to the 1st.
//
// After all the foods have been logged, the program should end.
//
// HINT: You'll need to use `setInterval` and `clearInterval`.

// initialize index
let index = 9;

// 1 second interval
let foodInterval = setInterval(function() {
  // log current element
  console.log(`#${index + 1} - ${mostPopularFood[index]}`);
  // decrement index
  index--;
  // stop interval after last array element
  if (index === -1) {
    clearInterval(foodInterval);
  }
}, 1000)