import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

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


//Create DB with firestore


export const db = getFirestore(app);