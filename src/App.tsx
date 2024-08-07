import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Gathering from './Gathering';
import Sermon from './Sermon';
import Plan from './Plan';
import Contact from './Contact';
import Download from './Download';
import NotFound from './404';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/'>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/gathering' element={<Gathering />} />
            <Route path='/sermon' element={<Sermon />} />
            <Route path='/plan' element={<Plan />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/download' element={<Download />} />
            <Route path='*' element={<NotFound />} />
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
