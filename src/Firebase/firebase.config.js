// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYQ8LgaCUSywFpRsfpUsjZEUopKFmVEs4",
  authDomain: "hexagon-f9ce4.firebaseapp.com",
  projectId: "hexagon-f9ce4",
  storageBucket: "hexagon-f9ce4.appspot.com",
  messagingSenderId: "545283038037",
  appId: "1:545283038037:web:9bd68576fd4e5bd11ceddc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

 export default auth;

