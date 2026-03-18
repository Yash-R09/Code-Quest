import React, { useState } from "react";
import { auth, provider, db } from "../firebaseConfig";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const createUserIfNotExists = async (user) => {
    const ref = doc(db, "users", user.uid);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      await setDoc(ref, {
        email: user.email,
        xp: 0,
        level: 1,
        completedProblems: [],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let result;
      if (isSignup) {
        result = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        result = await signInWithEmailAndPassword(auth, email, password);
      }
      await createUserIfNotExists(result.user);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      await createUserIfNotExists(result.user);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="app-container flex items-center justify-center min-h-screen">
      <div className="card p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4">
          {isSignup ? "Sign Up" : "Login"} to Code Quest
        </h2>

        {error && <p className="text-red-400">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-indigo-900 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-indigo-900 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn btn-primary w-full">
            {isSignup ? "SIGN UP" : "LOGIN"}
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="btn bg-red-500 w-full mt-4"
        >
          LOGIN WITH GOOGLE
        </button>

        <p className="mt-4 text-sm">
          {isSignup ? "Already have an account?" : "No account?"}{" "}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="underline text-orange-400"
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
