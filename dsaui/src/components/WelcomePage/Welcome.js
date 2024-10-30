import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.module.css'; 

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="welcome-page">
      <h1>Welcome to Data Structures Visualization</h1>
      <div className="data-structure-list">
        <div className="data-structure">
          <button onClick={() => handleNavigation('/array')} className="clickable">
            Array Visualization
          </button>
        </div>
        <div className="data-structure">
          <button onClick={() => handleNavigation('/queue')} className="clickable">
            Queue Visualization
          </button>
        </div>
        <div className="data-structure">
          <button disabled className="non-clickable">
            Linked Lists (Coming Soon)
          </button>
        </div>
        <div className="data-structure">
          <button disabled className="non-clickable">
            Stacks (Coming Soon)
          </button>
        </div>
        <div className="data-structure">
          <button disabled className="non-clickable">
            Graphs (Coming Soon)
          </button>
        </div>
        <div className="data-structure">
          <button disabled className="non-clickable">
            Trees (Coming Soon)
          </button>
        </div>
        <div className="data-structure">
          <button disabled className="non-clickable">
            Sorting Algorithms (Coming Soon)
          </button>
        </div>
        <div className="data-structure">
          <button disabled className="non-clickable">
            Search Algorithms (Coming Soon)
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
