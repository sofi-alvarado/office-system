import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import NavBar from '../components/NavBar';

const AppRouter = () => {
  return (
  	<Router>
      <div className='home'>
        <div className='main-content'>
          <NavBar />
          <div className='content'>
            <Routes>
              <Route path='/home' element={<Home />} />
            </ Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;