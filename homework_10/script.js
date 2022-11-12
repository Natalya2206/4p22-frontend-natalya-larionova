'use strict';

console.log('Пункт No1:');
console.log('-----------');

fetch('https://reqres.in/api/users?per_page=12')
   .then(response => response.json())
   .then((info) => {

      const users = info.data;


console.log('-----------');
console.log('Пункт No2:');
console.log('-----------');

users.forEach((item) => {
  console.log(item.last_name);
});

console.log('-----------');
console.log('Пункт No3:');
console.log('-----------');

const filterLastname = users.filter((item) => {
  return item.last_name[0] === 'F';
})
console.log(filterLastname);

console.log('-----------');
console.log('Пункт No4:');
console.log('-----------');

const bdUsers = users.reduce((accumulator, item, index, array) => {
  let infoString = `${item.first_name} ${item.last_name}`;
  if (index !== array.length - 1) {
    infoString += ', ';
  }

  accumulator += infoString;
  return accumulator;
}, '');
console.log(`Наша база содержит данные следующих пользователей: ${bdUsers}`);

console.log('-----------');
console.log('Пункт No5:');
console.log('-----------');

console.log(`${Object.keys(users[0])}`);   

});