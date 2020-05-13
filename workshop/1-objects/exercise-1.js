// Exercise 1.0
// ------------
// Create an object that represents *you*.
// It should contain your first name, last name, age and hometown.

// It should look something like this
// let myObject = {
//     name: {
//         first: 'Scott',
//         last: 'Morin',
//     },
//     age: '49',
//     city: 'Montreal',
//     siblings: 1,
//     petName: 'Mia',
//     monthOfBirth: 'July'
// }

// A) console.log() your object.
// B) console.log() a few of the values in the object.

let me = {
  name: {
    first: 'Alexandre',
    last: 'Gagnon-Lalonde'
  },
  age: 25,
  city: 'Montreal',
  siblings: 3,
  petName: {
    1: 'Cedric',
    2: 'Mirou'
  },
  monthOfBirth: 'July'
}

console.log(me);
console.log(`My name is ${me.name.first + ' ' + me.name.last}. I am ${me.age} years old and I have ${me.siblings} siblings`);

//-------------------------------------------------

// Exercise A
// ------------
// Add three more key/value pairs to your object that represent other attributes
// of yourself. Ideas include (but are not limited to):
//     - Favorite TV Shows/Movies/Sports/Activities etc.
//     - Occupation
//     - Date of Birth
//     - Pets (number of pets, names of pets, etc.)

// HINT: You can just modify the object that you created before.

me.favTvShow = 'Ozark';
me.occupation = 'student';
me.dateOfBirth = '19-07-1994';
me.laptopBrand = 'MSI';
me.calorieIntake = 3000;

console.log(me);

//-------------------------------------------------

// Exercise B
// ------------
// Look up your favorite movie on IMDB, and make an object that represents some
// aspects of that movie, *e.g.*:
//     - Title
//     - Director
//     - Year released
//     - Rating
//     - Actors

// HINT: Most movies have multiple actors. What data-structure do we use to
// represent a collection of similar things?

let favoriteMovie = {
  title: 'Gladiator',
  director: 'Ridley Scott',
  releaseYear: 2000,
  rating: '8.5/10',
  actors: {
    main: 'Russell Crowe',
    badGuy: 'Joaquin Phoenix',
    someGirl: 'Connie Nielsen',
    someGuy: 'Djimon Hounsou'
  }
};

//-------------------------------------------------

// Exercise C
// ------------
// Fix the attempts to access values in the `person` object:

const key = 'name';
const person = {
  name: 'Alyssa P. Hacker',
  age: 26,
  hometown: 'somewhere',
};

person.age; // => 26
person[key]; // => "Alyssa P. Hacker"
console.log('person[key] :', person[key]);
console.log('person.age :', person.age);

//-------------------------------------------------

// Exercise D
// ------------
// Write a function `fullName` that takes a person object as an argument, and
// returns that person's full name as a string. By *person object*, we mean an
// object that has the structure of the object you created to represent
// yourself above.

// Example
const alyssa = {
  name: {
    first: 'Alyssa',
    middle: 'P.',
    last: 'Hacker',
  },
  age: 26,
};

function fullName(person) {
  let {first, middle, last} = person.name;
  return `${first} ${middle} ${last}`
}

console.log(fullName(me));
console.log(fullName(alyssa)); // => "Alyssa P. Hacker"

// Exercise E
// ------------
// What happens if you pass a person object to `fullName` that doesn't have a
// middle name? It's likely that you'd get a double space: "Alyssa  Hacker"

// Your `fullName` function should work correctly regardless of whether or not
// the person has a middle name -- if it doesn't produce the output shown above
// when given the object `{name: {first: "John", last: "Doe"}}`, fix it so that
// it does.

const rick = {
  name: {
    first: 'Rick',
    last: 'Sanchez',
  },
  age: 66,
};

function betterFullName(person) {
  // grab an array of value from the person.name object
  let namesArr = Object.values(person.name);
  // initialize the name string
  let nameStr = '';
  // loop through name array and add value to string
  namesArr.forEach(function(element) {
    nameStr += ' ' + element;
  })
  // remove the first space in the string
  nameStr = nameStr.substr(1);
  return nameStr
}

console.log(betterFullName(rick)); // => "Rick Sanchez"
console.log(betterFullName(me));
