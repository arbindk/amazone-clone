import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJ5S_xFnAN56aroRscts3xKYeTMMKUxKg",
  authDomain: "e-clone-57d6f.firebaseapp.com",
  databaseURL: "https://e-clone-57d6f.firebaseio.com",
  projectId: "e-clone-57d6f",
  storageBucket: "e-clone-57d6f.appspot.com",
  messagingSenderId: "377761464867",
  appId: "1:377761464867:web:7b310ae75e99ad023be796",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
