import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserContextProvider } from './context/UserContex';
import { NewsContextProvider } from './context/NewsContext'
import { TaskContextProvider } from './context/TaskContext'
import { GradesContextProvider } from './context/GradesContext'


ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <NewsContextProvider>
        <TaskContextProvider>
          <GradesContextProvider>
            <App />
          </GradesContextProvider>
        </TaskContextProvider>
    </NewsContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


