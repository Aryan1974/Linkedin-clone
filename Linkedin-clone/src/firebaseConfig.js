// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb-p4tNsGdiWCJgmRP4ktYxA-0vkmaDnQ",
  authDomain: "linkedin-5c307.firebaseapp.com",
  projectId: "linkedin-5c307",
  storageBucket: "linkedin-5c307.firebasestorage.app",
  messagingSenderId: "880777563483",
  appId: "1:880777563483:web:75ea60b7cd310956c41e7e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
