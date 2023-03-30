/* eslint-disable prettier/prettier */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Page404 from '../Pages/404/Page404';

import Home from '../Pages/Home/Home';
import { chargingPatients } from '../store/Thunks/patients';
import { login } from '../store/Slices/authSlice';
import { chargeerPatients } from '../store/Slices/patientsSlice';


const DashBoardRoutes = () => {
  const dispatch = useDispatch();
  const patients = useSelector(state => state.patients);
  
  const access_token = localStorage.getItem('access_token');
  useEffect(() => {
    if (patients.patient === null){
      dispatch(chargingPatients());
    }
    dispatch(login({access_token, isAuthenticathed: true}));
  },[]);

  return (
    <>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route
          path='/*'
          element={<Navigate to={('/Home')} />}
        />
      </Routes>
    </>
  );
};

export default DashBoardRoutes;
