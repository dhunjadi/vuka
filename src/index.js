import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserContextProvider } from './context/UserContex';
import {NewsContextProvider} from './context/NewsContext'


ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <NewsContextProvider>
    <App />
    </NewsContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


