import React from 'react'
import "./css/app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import TasksPage from './pages/TasksPage';
import SchedulePage from './pages/SchedulePage';
import LibraryPage from './pages/LibraryPage';
import GradesPage from './pages/GradesPage';
import SettingsPage from './pages/SettingsPage';
import BookDetails from './components/Library/BookDetails';
import NewsDetails from './components/Home/NewsDetails';



export default function App() {
  return (
    <div className='App'>
      <Router>
            <Switch>
              <Route path="/" exact component={LoginPage} />
              <Route path="/home" exact component={HomePage} />
              <Route path="/home/news/:id" component={NewsDetails} />
              <Route path="/tasks" exact component={TasksPage} />
              <Route path="/schedule" exact component={SchedulePage} />
              <Route path="/library" exact component={LibraryPage} />
              <Route path="/library/book/:id" component={BookDetails} />
              <Route path="/grades" exact component={GradesPage} />
              <Route path="/settings" exact component={SettingsPage} />
            </Switch>
          </Router>
    </div>
  )
}
