import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };


//TO work with arrays

//ADD
// database.ref('notes').push({
//     title: 'React Native',
//     body: 'Course Topics'
// })

//UPDATE

// database.ref('notes/-NcaVR8Ai498THwO92nQ').update({
//     body: 'Buy Food'
// });

//REMOVE
// database.ref('notes/-NcaV8QVQ928JuUhs5To').remove();

//FETCH
// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push(
//                 {
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                 }
//             );
//         });
//         console.log(expenses);
//     });

//'child_removed'
// database.ref('expenses').on('child_removed',(snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //'child_changed'
// database.ref('expenses').on('child_changed',(snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //'child_added'
// database.ref('expenses').on('child_added',(snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// //Challenge
// database.ref('expenses').push({
//     description: 'Expense 2',
//     note: "",
//     amount: 25.5,
//     createdAt: 15000
// });

// database.ref('expenses')
//     .on('value',
//         (snapshot) => {
//             const expenses = [];
//             snapshot.forEach((childSnapshot) => {
//                 expenses.push(
//                     {
//                         id: childSnapshot.key,
//                         ...childSnapshot.val()
//                     }
//                 );
//             });
//             console.log(expenses);
//         });



//-----------------------------------------------
// database.ref().set(
//     {
//         name: 'Daniel',
//         age: 35,
//         stressLevel: 6,
//         job:{
//             title: 'Software Developer',
//             company: 'Google'
//         },
//         location: {
//             city: "Lisboa",
//             country: "Portugal"
//         }
//     }
// //handling error
// ).then(() => {
//     console.log("Data is saved!");
// }).catch((e) => {
//     console.log("This failed", e);
// });

//removing data

//using remove
// var isSingleRef = database.ref("isSingle");
// isSingleRef.remove()
// .then(() => {
//     console.log("Remove succeeded");
// }).catch((e) => {
//     console.log("Remove failed", e);
// });

//using  set
// var isSingleRef = database.ref("isSingle");
// isSingleRef.set(null)
// .then(() => {
//     console.log("Remove succeeded");
// }).catch((e) => {
//     console.log("Remove failed", e);
// });

//updating data

// database.ref().update({
//     name: 'Danny',
//     age: 29,
//     //creating new attributes
//     job: 'Software Developer',
//     //removing atts
//     isSingle: null
// });

//refereced update
// database.ref().update({
//     job: 'Manager',
//     'location/city': 'Porto'
// });

//Challenge
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
// });

//fetching data

//to get the data once
// database.ref()
// .once('value')
// .then((snapshot)=> {
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch(()=> {
//     console.log("Error fetching data", e);
// });

//to keep track of the changes of a data

// const onValueChange = database.ref()
// .on('value',
// (snapshot)=> {
//     const val = snapshot.val();
//         console.log(val);
// }, (e) => {
//     console.log("Error with data fetching", e)
// }
// );

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     //remove the watcher
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

//Challenge
// const onValueChange = database.ref()
// .on('value',
// (snapshot)=> {
//     const val = snapshot.val();
//         console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// }, (e) => {
//     console.log("Error with data fetching", e)
// });


// database.ref().update({
//     name: 'Patrícia',
//     job: {
//         company: 'Amazon',
//         title: 'Tester'
//     }
// });
