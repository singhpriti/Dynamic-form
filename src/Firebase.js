import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBF7tEeklEtMxqqC_F71YswB6O4t4ZMJYQ",
    authDomain: "dynamic-form-fa686.firebaseapp.com",
    projectId: "dynamic-form-fa686",
    storageBucket: "dynamic-form-fa686.appspot.com",
    messagingSenderId: "710359818209",
    appId: "1:710359818209:web:8372b2a752965c3465fca0",
    measurementId: "G-B6Y1PGFNWY"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;