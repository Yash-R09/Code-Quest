import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { useParams, useNavigate } from "react-router-dom";
import { problemLevels } from "./problemData";
import { auth, db } from "../firebaseConfig";
import { doc, updateDoc, arrayUnion, increment } from "firebase/firestore";

const CodeEditor = () => {
  const { levelId } = useParams();
  const navigate = useNavigate();
  const problem = problemLevels.find(p => p.id === Number(levelId));

  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    setCode(problem.starterCode);
  }, [problem]);

  const runCode = async () => {
    try {
      for (let test of problem.testCases) {
        const fn = new Function(`${code}; return ${test.input}`);
        const result = fn();
        if (JSON.stringify(result) !== JSON.stringify(test.expected)) {
          setOutput("❌ Test case failed");
          return;
        }
      }

      // ✅ ALL PASSED
      setOutput("✅ All test cases passed!");

      const ref = doc(db, "users", auth.currentUser.uid);
      await updateDoc(ref, {
        xp: increment(problem.xp),
        completedProblems: arrayUnion(problem.id),
        level: increment(Math.floor(problem.xp / 500))
      });

      setTimeout(() => navigate("/dashboard"), 1500);

    } catch (err) {
      setOutput("❌ Error: " + err.message);
    }
  };

  return (
    <div className="p-6 bg-indigo-900 min-h-screen text-white">
      <h2 className="text-xl font-bold">{problem.title}</h2>
      <p>{problem.description}</p>

      <Editor
        height="350px"
        theme="vs-dark"
        language="javascript"
        value={code}
        onChange={setCode}
      />

      <button
        onClick={runCode}
        className="mt-4 px-4 py-2 bg-green-500 rounded"
      >
        Run Code
      </button>

      <pre className="mt-4 bg-black p-3 rounded">{output}</pre>
      <p className="mt-2 text-yellow-300">
        Expected Output: {problem.expectedOutput}
      </p>
    </div>
  );
};

export default CodeEditor;
