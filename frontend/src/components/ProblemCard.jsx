// frontend/src/components/ProblemCard.jsx
import React from 'react';

const ProblemCard = ({ problem, onSelect }) => {
  // Determine badge color based on difficulty
  const getBadgeColor = (difficulty) => {
    switch(difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'hard': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };

  const handleClick = () => {
    if (onSelect) {
      onSelect(problem);
    }
  };

  return (
    <div 
      className="card relative p-2 cursor-pointer hover:shadow-lg transition-all duration-300 h-[120px] flex flex-col" 
      onClick={handleClick}
    >
      {/* Glowing corner effect */}
      <div className="absolute top-0 left-0 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 opacity-70 rounded-br-3xl"></div>
      
      <div className="flex justify-between items-start">
        <h3 className="text-xs font-bold text-white z-10">{problem.title}</h3>
        <span className={`challenge-badge text-[10px] px-1 py-0 ${getBadgeColor(problem.difficulty)}`}>
          {problem.difficulty}
        </span>
      </div>
      
      <p className="text-blue-100 text-[10px] my-1 line-clamp-2 flex-grow">{problem.description}</p>
      
      <div className="flex justify-between items-center mt-auto">
        <span className="flex items-center text-yellow-300 text-[10px]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {problem.xp} XP
        </span>
        
        <button className="btn btn-primary flex items-center text-[10px] py-0 px-1">
          Start
          <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProblemCard;
