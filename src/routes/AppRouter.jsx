import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';

const AppRouter = () => {
  return (
  	<Router>
      <div className='home'>
        <div className='main-content'>
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