import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Sermon from './Sermon';
import YearPlan from './YearPlan';

function App() {
  return (
    <div className='App'>
      <Routes>
          <Route path='/'>
              <Route index element={<Home />} />
              <Route path='home' element={<Home />} />
              <Route path='sermon' element={<Sermon />} />
              <Route path='year-plan' element={<YearPlan />} />
              {/* <Route path='*' element={<NoMatch />} /> */}
          </Route>
      </Routes>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
