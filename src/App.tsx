import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Sermon from './Sermon';
import Plan from './Plan';
import Contact from './Contact';
// import NoMatch from './404';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/'>
            <Route index element={<Home />} />
            {/* <Route path={`${process.env.PUBLIC_URL}/home`} element={<Home />} /> */}
            <Route path={`${process.env.PUBLIC_URL}/home`} element={<Home />} />
            <Route path={`${process.env.PUBLIC_URL}/sermon`} element={<Sermon />} />
            <Route path={`${process.env.PUBLIC_URL}/plan`} element={<Plan />} />
            <Route path={`${process.env.PUBLIC_URL}/contact`} element={<Contact />} />
            <Route path='*' element={<Home />} />
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
