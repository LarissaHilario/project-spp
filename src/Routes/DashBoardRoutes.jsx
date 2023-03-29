/* eslint-disable prettier/prettier */

import { Navigate, Route, Routes } from 'react-router-dom';
import Page404 from '../Pages/404/Page404';

import Home from '../Pages/Home/Home';



const DashBoardRoutes = () => {


  return (
    <>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Error' element={<Page404/>}/>
        <Route
          path='/*'
          element={<Navigate to={('/Home')} />}
        />
      </Routes>
    </>
  );
};

export default DashBoardRoutes;
