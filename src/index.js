import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserContextProvider } from './context/UserContex';
import {NewsContextProvider} from './context/NewsContext'
import {TaskContextProvider} from './context/TaskContext'


ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <NewsContextProvider>
        <TaskContextProvider>
          <App />
        </TaskContextProvider>
    </NewsContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


