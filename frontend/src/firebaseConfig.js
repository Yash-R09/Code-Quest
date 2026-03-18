// frontend/src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzFkXVIxie2ml5nynAfZHoMCqMfzSYmzk",
  authDomain: "code-quest-ea7b8.firebaseapp.com",
  projectId: "code-quest-ea7b8",
  storageBucket: "code-quest-ea7b8.firebasestorage.app",
  messagingSenderId: "487263352631",
  appId: "1:487263352631:web:2c78827f73281355378cb2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);