// We often deal with "arrays of objects";
// below is an example of an array of objects, where each object represents a person:

const people = [
  { name: { first: 'Alyssa', middle: 'P.', last: 'Hacker' }, age: 26 },
  { name: { first: 'Ben', last: 'Bitdiddle' }, age: 34 },
  { name: { first: 'Eva', middle: 'Lu', last: 'Ator' }, age: 40 },
  { name: { first: 'Lem', middle: 'E.', last: 'Tweakit' }, age: 45 },
  { name: { first: 'Louis', last: 'Reasoner' }, age: 21 },
  { name: { first: 'Shahan', middle: 'Haig', last: 'Krakirian' }, age: 21 },
];

// Exercise 5.0
// ------------
// Add the object representing yourself to this array of people (if your
// `name` key does not have the same "shape" as the ones above, make sure you
// change it to look like these).

let me = {
  name: {
    first: 'Alexandre',
    last: 'Gagnon-Lalonde'
  },
  age: 25
}

people.push(me);

//-------------------------------------------------

// Exercise 5.1
// ------------
// Write a function that returns the average age of the `people` array.

function avgAge(peopleArr) {
  // initialize average
  let average = 0;
  // loop through each element
  peopleArr.forEach(element => {
    // add each age to average
    average += element.age;
  });
  // divide average by amount of people
  average = Math.floor(average / peopleArr.length);
  return average
}

console.log(`Average age is ${avgAge(people)}.`);

//-------------------------------------------------

// Exercise 5.2
// ------------
// Write a function that, when passed an array of *people* (person objects) as
// an argument, returns an array of their full names (each full name is a string).
// Can you make use of your `fullName` function here?

function fullName(peopleArr) {
  // initialize the names array
  let names = [];
  // loop through each person
  peopleArr.forEach(element => {
    // create an array of each name component
    let nameArray = Object.keys(element.name);
    // initialize each name
    let nameString = '';
    // loop through each name component
    nameArray.forEach(item => {
      // add each name component to the string
      nameString += ' ' + element.name[item];
    })
    // remove first space
    nameString = nameString.substr(1);
    // add the string to the names array
    names.push(nameString);
  })
  return names
}

console.log(fullName(people));

//-------------------------------------------------

// Exercise 5.3
// ------------
// Write a function that, when given *people* and an *age* as arguments,
// returns an array of just the people that are older than the specified age..

function olderPeople(peopleArr, age) {
  // initialize a new empty array
  let newArray = [];
  // loop through each persons
  peopleArr.forEach(element => {
    // check if person is older
    if (element.age > age) {
      // add to array
      newArray.push(element);
    }
  })
  return newArray
}

console.log(olderPeople(people, 26));
