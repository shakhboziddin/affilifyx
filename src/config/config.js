import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBJS26zSH0y0l4BF6oK0QIayem92WJbTBA",
  authDomain: "affilifyx-16399.firebaseapp.com",
  projectId: "affilifyx-16399",
  storageBucket: "affilifyx-16399.appspot.com",
  messagingSenderId: "20813273235",
  appId: "1:20813273235:web:005c251fa021077a139566",
  measurementId: "G-6P7KQ26037",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage };
