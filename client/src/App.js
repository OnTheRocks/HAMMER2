import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
        <div>
          <NavBar/>
          <h1>Hello!</h1>
        </div>
    </Router>
  );
}

export default App;
