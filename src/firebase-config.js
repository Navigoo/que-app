// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYTzFpkq6KsWiENWKaEenNJoeD454H8pU",
  authDomain: "que-app-1adc4.firebaseapp.com",
  projectId: "que-app-1adc4",
  storageBucket: "que-app-1adc4.appspot.com",
  messagingSenderId: "50171311957",
  appId: "1:50171311957:web:5967084dc9dbe05eff61dc",
  measurementId: "G-3WGDB37L0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Create DB with firestore
const db = getFirestore();