import firebase from 'firebase'
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDHsRVYnOvyqHZehQWqwW7RODGYdPy5Yzo",
    authDomain: "notes-52168.firebaseapp.com",
    databaseURL: "https://notes-52168.firebaseio.com",
    projectId: "notes-52168",
    storageBucket: "notes-52168.appspot.com",
    messagingSenderId: "40090489308"
};

firebase.initializeApp(config);

const db = firebase.firestore();

export default db ;