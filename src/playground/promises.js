const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //only call one time
        resolve({
            name: 'Daniel',
            age: 35
        });
        // reject("Something went wrong");
    }, 1500);
});

console.log('before');
promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //only call one time
            resolve('This is my other promise');
            // reject("Something went wrong");
        }, 1500);
    });
})
//promise chain
.then((str)=>{
    console.log('does this run?', str);
})

.catch((error) => {
    console.log('error ', error);
});

//second way of catching errors
// console.log('before');
// promise.then((data) => {
//     console.log('1', data);
// }, (error)=>{    
//     console.log('error', error);
// });


console.log('after');

//model
// ).then(() => {
//     console.log("Data is saved!");
// }).catch((e) => {
//     console.log("This failed", e);
// });