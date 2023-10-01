// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {getFirestore, collection} from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = initializeApp( {
  apiKey: "AIzaSyCGEJTrYe27tC4QrAQbbdZbJZ-BL_2EA-g",
  authDomain: "clict2link.firebaseapp.com",
  projectId: "clict2link",
  storageBucket: "clict2link.appspot.com",
  messagingSenderId: "656363250376",
  appId: "1:656363250376:web:f55560d94487a205023bfd"
});

 const auth = getAuth(firebaseConfig);

 const database = getFirestore();

 const storage = getStorage(firebaseConfig);

 const clientColRef = collection(database,'client')

 export {firebaseConfig, storage, database, clientColRef}