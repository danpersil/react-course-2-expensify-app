//
//Object destructuring
//

// const person = {
//     name: 'Teste',
//     age: 35,
//     location: {
//         city: 'Lisboa',
//         temp: 12
//     }
// };

//destructuring the object
//default value
// const { name = 'Anonymous', age } = person;

// //Naming default value
// // const { name: firstname = 'Anonymous', age } = person;

// console.log(`${name} is ${age}`);

// //aliases
// const { temp: temperature, city } = person.location;
// console.log(`It's ${temperature} in ${city}.`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Reyan Holiday',
//     publisher: {
//         // name: 'Penguim'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName);

//
//Array destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Penylvania', '19147'];

//ordered my position
// const [street, city, state, zip] = address;
// console.log(`You are in ${city} ${state}.`)

//you can always remove the last option, just have to leave the comma
// const [, , stateZ, zipZ] = address;

//You set defaults
// const [, , stateY = 'Sao Paulo', ziYZ] = address;

//practice
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}.`);

//Spreading
const user = {
    name: 'Jen',
    age: 24

};

console.log(
    {
        //for cloning the array and change its properties or create new ones
        ...user,
        location: 'Philadelphia',
        age: 27
    }
);