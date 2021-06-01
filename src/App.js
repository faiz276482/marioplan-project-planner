import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/layout/NavBar'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
    </Router>
    
  );
}

export default App;
