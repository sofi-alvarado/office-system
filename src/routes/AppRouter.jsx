import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';

const AppRouter = () => {
  return (
  	<Router>
      <div className='home'>
        <div className='main-content'>
         
          <div className='content'>
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path='/home' element={<Home />} />
              <Route path='/login' element={<LogIn />} />
              <Route path='/register' element={<Register />} />
            </ Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;