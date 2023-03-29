import { axiosInstance } from '../../helpers/axiosInstance';
import { addActiveForm } from '../Slices/activeForm';
import { chargeerPatients} from '../Slices/patientsSlice';

export const chargingPatients = accessToken => {
  return async (dispatch, getState) => {
    axiosInstance
      .get('http://18.116.180.141/user/login')
      .then(({ data }) => {
        dispatch(
          chargeerPatients({
             patients: data,
          
          })
        );
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

export const chargingActiveForm = id => {
  return async dispatch => {
    localStorage.setItem('patientId', id);
    await axiosInstance
      .get('http://18.116.180.141/patients' + id)
      .then(({ data }) => {
        dispatch(
          addActiveForm({
            activeForm: {
              id: data.id,
              name: data.nombre,
              sexo: data.sexo,
              weight:data.weight,
              height: data.height,
              email: data.email
            },
          })
        );
      })
      .catch(err => {
        console.log(err);
      });
  };
};
