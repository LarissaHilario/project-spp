/* eslint-disable prettier/prettier */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Page404 from '../Pages/404/Page404';

import Home from '../Pages/Home/Home';
import { chargingActiveForm, chargingPatients } from '../store/Thunks/patients';
import { login } from '../store/Slices/authSlice';
import { chargeerPatients } from '../store/Slices/patientsSlice';
import Form from '../Pages/Home/Components/Form/Form';


const DashBoardRoutes = () => {
  const dispatch = useDispatch();
  const patients = useSelector(state => state.patients);
  
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (patients.patients === null){
      dispatch(chargingActiveForm())
      dispatch(chargingPatients());
    }
    
    dispatch(login({token, isAuthenticathed: true}));
  },[]);

  return (
    <>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Home/:id' element={<Form/>}/>
        <Route
          path='/*'
          element={<Navigate to={('/Home')} />}
        />
      </Routes>
    </>
  );
};

export default DashBoardRoutes;
