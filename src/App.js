import React from 'react'
import "./css/app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import WelcomePage from './pages/WelcomePage';



export default function App() {
  return (
    <div className='App'>
      <Router>
            <Switch>
              <Route path="/" exact component={LoginPage} />
              <Route path="/welcome" exact component={WelcomePage} />
            </Switch>
          </Router>
    </div>
  )
}
