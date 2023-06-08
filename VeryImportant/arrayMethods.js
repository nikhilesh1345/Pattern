const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const filterCriteria = number => number > 5;

const numbersGreaterThan5 = nums.filter(filterCriteria);
console.log(numbersGreaterThan5);


const names = ['Rishi', 'Eclipse', 'Sean'];

console.log(names.indexOf('Sean'));

//Start searching for the first match from the right end of the array
console.log(names.lastIndexOf('Sean'))

// Using the find method
const seanObject = users.find((user, index) => user.name === 'Sean');

// Using the findIndex method
const seanSittingIndex = users.findIndex(user => user.name === 'Sean');

const gamesToPlay = [
    'Call of Duty',
    'Road Rash',
    'The Witcher 3 - Wild Hunt'
  ]

gamesToPlay.forEach(game => console.log(game + '-Outdated'));
  console.log(gamesToPlay);

cars.some(car => car.color === "red" && car.type === "cabrio");
// output: true

cars.every(car => car.capacity >= 4);
// output: false