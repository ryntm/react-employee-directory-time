import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Directory from './pages/Directory/Directory';
import EmployeePage from './pages/EmployeePage/EmployeePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path = '/' component={Directory} />
          <Route exact path = '/:name' component={EmployeePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
