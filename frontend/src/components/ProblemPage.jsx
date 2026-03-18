// frontend/src/pages/ProblemPage.jsx
import React from 'react';
import Navbar from './Navbar';
import CodeEditor from '../components/CodeEditor';

const ProblemPage = ({ problem }) => {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="font-bold text-2xl mb-2">{problem.title}</h1>
        <p className="mb-4">{problem.description}</p>
        <CodeEditor />
      </div>
    </div>
  );
};

export default ProblemPage;
