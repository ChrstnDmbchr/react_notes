import firebase from 'firebase'
import 'firebase/firestore';
import dbconfig from '../config'

const config = {
    apiKey: dbconfig.FIREBASE_API_KEY,
    authDomain: dbconfig.FIREBASE_AUTH_DOAMIN,
    databaseURL: dbconfig.FIREBASE_DB_URL,
    projectId: "notes-52168",
    storageBucket: "notes-52168.appspot.com",
    messagingSenderId: "40090489308"
};

firebase.initializeApp(config);

const db = firebase.firestore();

export default db ;