import './App.css';
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";


function App() {
  return (
    <div className="App">
     <p>hej</p>
    </div>
  );
}

export default App;
