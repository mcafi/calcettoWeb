import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyDCTdcKxXDEzDSU1aCTWxms2eo1C4dW2-s",
    authDomain: "calcetto-app-6939e.firebaseapp.com",
    databaseURL: "https://calcetto-app-6939e.firebaseio.com",
    projectId: "calcetto-app-6939e",
    storageBucket: "calcetto-app-6939e.appspot.com",
    messagingSenderId: "820965235480",
    appId: "1:820965235480:web:9f4dfdbefd56d437e69c6d",
    measurementId: "G-DX2XTQG925"
  };
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('utenti')
const matchesCollection = db.collection('partite')

// export utils/refs
export {
    db,
    auth,
    usersCollection,
    matchesCollection
}