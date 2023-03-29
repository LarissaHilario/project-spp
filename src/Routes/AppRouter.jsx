import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login/Login';

import DashBoardRoutes from './DashBoardRoutes';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        {}
        <Route
          path='/login'
          element={
            <PublicRoutes>
              <Login/>
            </PublicRoutes>
          }
        />
        <Route
          path='/*'
          element={
            
            <DashBoardRoutes />
          
            
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
