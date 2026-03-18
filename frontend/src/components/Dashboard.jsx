import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { problemLevels } from "./problemData";
import Navbar from "./Navbar";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      if (!auth.currentUser) return;

      const ref = doc(db, "users", auth.currentUser.uid);
      const snap = await getDoc(ref);
      setUserData(snap.data());
    };
    fetchUser();
  }, []);

  if (!userData) return <p className="text-white p-4">Loading...</p>;

  return (
    <div className="min-h-screen bg-indigo-900">
      <Navbar />
      <div className="p-6 grid gap-4">
        <h2 className="text-white text-xl">
          XP: {userData.xp} | Level: {userData.level}
        </h2>

        {problemLevels.map((p) => {
          const unlocked = userData.xp >= p.requiredXP;

          return (
            <div
              key={p.id}
              className={`p-4 rounded ${
                unlocked ? "bg-indigo-700" : "bg-gray-600 opacity-50"
              }`}
            >
              <h3 className="text-white font-bold">{p.title}</h3>
              <p className="text-sm text-gray-200">{p.description}</p>
              <p className="text-xs text-yellow-300">
                XP: {p.xp} | Required XP: {p.requiredXP}
              </p>

              <button
                disabled={!unlocked}
                onClick={() => navigate(`/editor/${p.id}`)}
                className="mt-2 px-4 py-1 bg-orange-500 rounded disabled:bg-gray-500"
              >
                {unlocked ? "Start" : "Locked 🔒"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
