import React, { useState, useEffect } from 'react';
import './DivRefresh.css'; // Assuming you have this CSS file in the same directory as your component

function HomePage() {
  const [content, setContent] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setContent(generateContent());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const generateContent = () => {
    return Math.round(Math.random()*1000);
  };

  return (
    <div className="container">
      {/* First div box */}
      <div className="first-box">
        
      </div>
      
      {/* Second div box */}
      <div className="second-box">
        {content}
        
      </div>
    </div>
  );
}

export default HomePage;
