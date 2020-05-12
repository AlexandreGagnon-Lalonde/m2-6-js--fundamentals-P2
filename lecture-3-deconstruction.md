# 2.6.3 — Deconstructing

---

Let's say we have the following program:

```js
function doSomething(data) {
  let name = data[0];
  let city = data[1];
  let age = data[2];
}

let me = ['Josh', 'Montreal', 33];

doSomething(me);
```

We're essentially "deconstructing" the array.

---

There is a syntax to do this in 1 step:

```js
function doSomething(data) {
  let [name, city, age] = data;
}

let me = ['Josh', 'Montreal', 33];

doSomething(me);
```

---

By wrapping the assignment variables in square brackets, you "unpack" them:

```js
let [one, two, three] = [1, 2, 3];
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3
```

---

This even works with function parameters!

```js
function doSomething([name, city, age]) {
  console.log(name); // 'Josh'
}

let me = ['Josh', 'Montreal', 33];

doSomething(me);
```

---

Finally: something similar works with objects.

---

```js
let myObj = {
  name: 'Josh',
  city: 'Montreal',
  age: 33,
};

const { name, age } = myObj;

console.log(name); // 'Josh'
console.log(age); // 33
```

---

# Exercises

Convert the following to take advantage of deconstruction

---

```js
let winningNumbers = [4, 17, 38, 9];

let [firstPlace, secondPlace, thirdPlace] = winningNumbers;

// let firstPlace = winningNumbers[0];
// let secondPlace = winningNumbers[0];
// let thirdPlace = winningNumbers[0];

console.log(
  `The top three winners are: ${firstPlace}, ${secondPlace}, ${thirdPlace}.`
);
```

---

```js
let weatherData = {
  city: 'Toronto',
  weather: 'sunny',
  temperature: 23,
};

function printWeather(data) {
  let {city, weather, temperature} = data;
  console.log(
    `It is ${/*data.*/weather} in ${/*data.*/city}, with a high of ${temperature}.`
  );
}

printWeather(weatherData);
```

---

```js
function handleChange(event) {
  let {value} = event.target;
  console.log(value);
}

let input = document.querySelector('input');
input.addEventListener('change', handleChange);
```
