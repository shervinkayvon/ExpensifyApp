//
// Object destructuring
//

// const person = {
//     name: 'Shervin',
//     age: 32,
//     location: {
//         city: 'paris',
//         temp: 0
//     }
// };
// 
// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age} years old.`);
// 
// const { city, temp: temperature } = person.location;
// if (city && typeof temperature === 'number') {
//     console.log(`${city} now has a temperature of ${temperature} `);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
// 
// const { name: publisherName = 'Self-Published' } = book.publisher;
// 
// console.log(publisherName);

//
// Array destructuring
//

// const address = ['56 Rue Saint Sabin', 'Paris', 'France'];
// 
// const [, city, country = 'USA'] = address;
// 
// console.log(`You are in ${city} ${country}`);

const item = ['Coffee (hot)', '$2.25', '$2.50', '$2.75'];

const [drinkType, , medium] = item;

console.log(`A medium ${drinkType} costs ${medium}`);