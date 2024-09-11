import React from 'react';
import '../app.css'; 
import Navigation from './Navigation';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Savannah Marshall</h1>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;