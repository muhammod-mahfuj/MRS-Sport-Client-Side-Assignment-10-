// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCwnKdAk20RIUVJIIKLCaVLZBEIN9UjsQ",
  authDomain: "mrs-equipments.firebaseapp.com",
  projectId: "mrs-equipments",
  storageBucket: "mrs-equipments.firebasestorage.app",
  messagingSenderId: "777729378621",
  appId: "1:777729378621:web:ebf665e896e238fdbc9d54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);