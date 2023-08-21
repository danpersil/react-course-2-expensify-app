import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDA0vCJ4SSu4zyQ3N2BeiYUuGaM2ihu4JM",
    authDomain: "expensify-48486.firebaseapp.com",
    databaseURL: "https://expensify-48486-default-rtdb.firebaseio.com",
    projectId: "expensify-48486",
    storageBucket: "expensify-48486.appspot.com",
    messagingSenderId: "163059614209",
    appId: "1:163059614209:web:c482371f3d4640b808f600",
    measurementId: "G-GYX1FGWRM7"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set(
    {
        name: 'Daniel',
        age: 35,
        isSingle: true,
        location: {
            city: "Lisboa",
            country: "Portugal"
        }
    }
);

database.ref('age').set(27);
database.ref('location/city').set('New York');
database.ref('attributes').set({
    height: 1.85,
    weight: 88
});