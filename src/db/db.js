import firebase from "firebase/app";
import firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoP_QcIcKBfO5zy-ErzQSzVVXkur6c89g",

  authDomain: "brume-site.firebaseapp.com",

  projectId: "brume-site",

  storageBucket: "brume-site.appspot.com",

  messagingSenderId: "600252833105",

  appId: "1:600252833105:web:58c2f7b39e8289b2420770",

  measurementId: "G-G3KD31B8EY",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firestore;
export default firebaseApp.firestore();
