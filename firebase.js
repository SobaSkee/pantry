// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCXZVW2UTM232OXWWltXWURBvegYKls8l8",
  authDomain: "pantry-tracker-a6a2c.firebaseapp.com",
  projectId: "pantry-tracker-a6a2c",
  storageBucket: "pantry-tracker-a6a2c.appspot.com",
  messagingSenderId: "585775369584",
  appId: "1:585775369584:web:685bf7792a0d15b49713b5",
  measurementId: "G-338VBZ8QMV",
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
