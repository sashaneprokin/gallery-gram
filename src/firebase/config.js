import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBL7UyAzcTTsz6lGwhOxEfbF8U3xh997ks",
  authDomain: "sneprokin-firestore.firebaseapp.com",
  projectId: "sneprokin-firestore",
  storageBucket: "sneprokin-firestore.appspot.com",
  messagingSenderId: "830959216077",
  appId: "1:830959216077:web:72c730ba762f47b57fd084"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};