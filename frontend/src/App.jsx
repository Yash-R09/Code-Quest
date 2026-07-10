// frontend/src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CodeEditor from "./components/CodeEditor";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/editor/:levelId" element={<CodeEditor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

//test cicd
