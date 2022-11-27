// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDK1ZDfqAkbTLRFT84PNpy71ZdAMiXj7bI",

  authDomain: "udd-proy-4.firebaseapp.com",

  projectId: "udd-proy-4",

  storageBucket: "udd-proy-4.appspot.com",

  messagingSenderId: "482057180019",

  appId: "1:482057180019:web:dcdfd09fb149511345ab06"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);