import { axiosInstance } from '../../helpers/axiosInstance';
import { addActiveForm } from '../Slices/activeForm';
import { chargeerPatients} from '../Slices/patientsSlice';

export const chargingPatients = token => {
  return async (dispatch, getState) => {
    axiosInstance
      .get('http://3.132.245.255:1234/patients/',{
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .then(({ data }) => {
        dispatch(
          chargeerPatients({
             patients: data.message,
          
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
    localStorage.setItem('id', id);
    await axiosInstance
      .get('http://3.132.245.255:1234/patients/' + id)
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
