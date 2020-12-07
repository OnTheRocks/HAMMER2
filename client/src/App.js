import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Customers from './components/pages/Customers'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
        <div>
          <NavBar/>
          {/* <Switch>
          <Route exact path={"/customers"}>
            <Customers/>
          </Route> */}
          <h1>Hello!</h1>
        {/* </Switch> */}
        </div>
    </Router>
  );
}

export default App;
