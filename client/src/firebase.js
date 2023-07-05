import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBLAZrKMyIySC1fHXnfOhKGEf8Zvm0xxCs",
    authDomain: "wnb-gr-fe68c.firebaseapp.com",
    projectId: "wnb-gr-fe68c",
    storageBucket: "wnb-gr-fe68c.appspot.com",
    messagingSenderId: "686217381487",
    appId: "1:686217381487:web:d0361daa04f229ca0b2f9a"
};

firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 