// Exercise 6
// -------------------

// Below are two objects of the same "format".
// Each object is a mapping between individual people and their favourite
// desserts
//
// Notice that there are duplicates (eg. both Riley and John like "ice-cream").

const favoriteDessertsGroupA = {
  scott: 'brownies',
  fred: 'tiramisu',
  lisa: 'chocolate cake',
  riley: 'ice-cream',
  sunny: 'cheese cake',
  john: 'ice-cream',
  beth: 'cheese cake',
  summer: 'ice-cream',
  morty: 'apple pie',
  rick: 'brownies',
  andrew: 'cheese cake',
  jerry: 'rhubard pie',
  'jean-luc': 'cheese cake',
  tiffany: 'waffles',
  melissa: 'profiteroles',
};

const favouriteDessertsGroupB = {
  alice: 'pie',
  betty: 'deep-fried mars bar',
  colin: 'gummy bears',
  damien: 'child tears',
  ellicia: 'panda express',
  fertrude: 'gummy bears',
  glinda: 'pie',
  hethel: 'not applicable',
  irsula: 'rum cake',
  judas: 'revenge (served cold)',
  khloe: 'pie',
  lyndon: 'easter eggs',
  minda: 'dessert',
}

// Exercise A
// Write a function which takes one of these objects and puts them into an
// array which is sorted from most popular to least popular. For example,
// in Group B, the most popular dessert is "pie", so it should be first
// in the array.
//
// For "ties", the order doesn't matter.
//
// HINT: You'll need to do this in 2 steps:
// - First, count how often each dessert appears
// - Second, put them in order

function sortDessertsByPopularity(dessertObject) {
  // grab all values from object and put in array
  let dessertArray = Object.values(dessertObject);
  // initialize new object
  let newDessertObj = {};
  // loop through new array
  dessertArray.forEach(element => {
    if (newDessertObj[element]) {
      // add 1 to element count in new object
      newDessertObj[element]++;
    } else {
      // initialize new object element
      newDessertObj[element] = 1;
    }
  })
  // new array with each values
  let newDessertValueArray = Object.values(newDessertObj);
  // new array with each keys
  let newDessertKeyArray = Object.keys(newDessertObj)
  // initialize results array
  let dessertSorted = [];
  // sort the values high to low
  newDessertValueArray.sort((a, b) => {
    if (a > b) {
      return -1
    } else {
      return 1
    }
  })
  // loop through object value array
  newDessertValueArray.forEach(element => {
    // loop through object key array
    for (let i = 0; i < newDessertValueArray.length; i++) {
      if (
        // check if values are equal
        newDessertObj[newDessertKeyArray[i]] === element && 
        // check if key is not already in array
        !dessertSorted.includes(newDessertKeyArray[i])
      ) {
        // add key to result array
        dessertSorted.push(newDessertKeyArray[i]);
      }
    }
  })
  return dessertSorted
}

console.log(
  'Popular desserts in Group B:',
  sortDessertsByPopularity(favouriteDessertsGroupB)
);
console.log(
  'Popular desserts in Group A:',
  sortDessertsByPopularity(favoriteDessertsGroupA)
);


/*
Exercise B
Create a new object with the following form:

{
  'name of dessert': ['name1', 'name2']
}

To be clear:
- The keys of this object should be the desserts
- The values should be arrays of the names of the people who prefer this
  dessert.

Expected output for Group B:

{
  'pie': [ 'alice', 'glinda', 'khloe' ],
  'deep-fried mars bar': [ 'betty' ],
  'gummy bears': [ 'colin', 'fertrude' ],
  'child tears': [ 'damien' ],
  'panda express': [ 'ellicia' ],
  'not applicable': [ 'hethel' ],
  'rum cake': [ 'irsula' ],
  'revenge (served cold)': [ 'judas' ],
  'easter eggs': [ 'lyndon' ],
  'dessert': [ 'minda' ]
}

(The order doesn't matter for objects. Your desserts might be in a different
order, and that's 100% OK).
*/

function groupPeopleByDessert(dessertObject) {
  let dessertKeysArray = Object.keys(dessertObject);
  let dessertValueArray = Object.values(dessertObject);
  let resultObject = {};
  dessertValueArray.forEach(element => {
    if (!resultObject[element]) {
      resultObject[element] = [];
    }
  })
  dessertKeysArray.forEach(element => {
    resultObject[dessertObject[element]].push(element);
  })
  return resultObject
}

console.log(
  'People grouped by dessert in Group B :',
  groupPeopleByDessert(favouriteDessertsGroupB)
);
console.log(
  'People grouped by dessert in Group A :',
  groupPeopleByDessert(favoriteDessertsGroupA)
);
