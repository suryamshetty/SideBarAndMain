import React from 'react';


const MainContent = ({ content }) => {
  return (
    <div className="main-content">
      {content === 'Home' && <h1>Welcome to the Home Page</h1>}
      {content === 'About' && <h1>About Us</h1>}
      {content === 'Contact' && <h1>Contact Us</h1>}
    </div>
  );
};

export default MainContent;
