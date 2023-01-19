import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA96rVKOAXF55oP7z6djqhxiNUD6cotWuc",
  authDomain: "rest-proyec4-25fd7.firebaseapp.com",
  projectId: "rest-proyec4-25fd7",
  storageBucket: "rest-proyec4-25fd7.appspot.com",
  messagingSenderId: "1042096348175",
  appId: "1:1042096348175:web:76a559860d54c405b6d77a"
};

const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);