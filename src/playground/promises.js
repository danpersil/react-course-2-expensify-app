const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //only call one time
        // resolve('This is my resolved data - you can add an object');
        reject("Something went wrong");
    }, 1500);
});

console.log('before');
promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('error ', error);
});

//second way of catching errors
console.log('before');
promise.then((data) => {
    console.log('1', data);
}, (error)=>{    
    console.log('error', error);
});


console.log('after');

//model
// ).then(() => {
//     console.log("Data is saved!");
// }).catch((e) => {
//     console.log("This failed", e);
// });