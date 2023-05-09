import React from 'react';
import Navigation from './Navagation';
import LoginForm from './LoginForm.js';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <div className="content">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
