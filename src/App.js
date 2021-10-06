import React, {useContext} from 'react'
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
import { TaskContext } from './context/TaskContext';
import { NewsContext } from './context/NewsContext';
import EditTaskModal from './components/Tasks/EditTaskModal';
import EditNewsModal from './components/Home/EditNewsModal'
import StudentGradesCard from './components/Grades/StudentGradesCard';



export default function App() {
  const { selectedTaskinfo } = useContext(TaskContext);
  const { selectedNewsinfo } = useContext(NewsContext)
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
              <Route path="/grades/student/:id" exact component={StudentGradesCard} />
              <Route path="/settings" exact component={SettingsPage} />
            </Switch>
          </Router>
          {selectedTaskinfo && 
            <EditTaskModal 
              selectedTaskinfo={selectedTaskinfo}
            />}
            {selectedNewsinfo &&
            <EditNewsModal 
              selectedNewsinfo={selectedNewsinfo}
            />}
    </div>
  )
}
