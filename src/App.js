import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar'
import Dashboard from './components/dashboard/Dashboard'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" component={Dashboard}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
