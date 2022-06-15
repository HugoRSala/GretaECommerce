// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeMT71QGx7wmu-s2xdJD5AFJmFYOjV3XE",
  authDomain: "greta-commerce.firebaseapp.com",
  projectId: "greta-commerce",
  storageBucket: "greta-commerce.appspot.com",
  messagingSenderId: "199598808082",
  appId: "1:199598808082:web:959346112fbe6cc4da0ccb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;