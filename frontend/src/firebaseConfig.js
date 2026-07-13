import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAzFkXVIxie2ml5nynAfZHoMCqMfzSYmzk",
  authDomain: "code-quest-ea7b8.firebaseapp.com",
  projectId: "code-quest-ea7b8",
  storageBucket: "code-quest-ea7b8.firebasestorage.app",
  messagingSenderId: "487263352631",
  appId: "1:487263352631:web:2c78827f73281355378cb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth, Provider, and Database
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); 
const db = getFirestore(app);

export { auth, provider, db };