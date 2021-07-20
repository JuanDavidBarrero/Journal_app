import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAIpKhQssUoBQnU-cb1MtLD-yHKlidvQxA",
    authDomain: "react-project-journal.firebaseapp.com",
    projectId: "react-project-journal",
    storageBucket: "react-project-journal.appspot.com",
    messagingSenderId: "774921679740",
    appId: "1:774921679740:web:2b612ebc4c2218952f6af9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvide = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvide,
    firebase
}
