import firebase from 'firebase/app'
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDUl0S1VZe2YHUZzStKwOC5JeZkGZwTbac",
    authDomain: "la-calera-f6ba5.firebaseapp.com",
    projectId: "la-calera-f6ba5",
    storageBucket: "la-calera-f6ba5.appspot.com",
    messagingSenderId: "436848976567",
    appId: "1:436848976567:web:3839cba064655be5f52332",
    measurementId: "G-BL6HV5MVL6"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export default fb.firestore();