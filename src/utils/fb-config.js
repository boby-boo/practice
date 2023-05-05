import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyA2KxCIAGasL_xtkDyiDz8otHq8DIy0NIQ",
    authDomain: "deliveryfood-61acf.firebaseapp.com",
    databaseURL: "https://deliveryfood-61acf-default-rtdb.firebaseio.com",
    projectId: "deliveryfood-61acf",
    storageBucket: "deliveryfood-61acf.appspot.com",
    messagingSenderId: "942518702448",
    appId: "1:942518702448:web:9803562cef04778b8f3fb5"
};

firebase.initializeApp(firebaseConfig);

export default firebase;