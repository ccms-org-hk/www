import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './config';
import App from './App';
import ReactGA from 'react-ga4';
import {
  // BrowserRouter, 
  HashRouter,
} from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

ReactGA.initialize('G-2Q058B5P14');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // Comment-out the StrictMode becos of using google-map-react
  // <React.StrictMode>

    // <BrowserRouter>
    <HashRouter>  
      <App />
    </HashRouter>
    // </BrowserRouter>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
