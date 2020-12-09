import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import Setup from './styles/Setup';
import GlobalStyles from './styles/GlobalStyles';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Setup />
    <GlobalStyles />
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
