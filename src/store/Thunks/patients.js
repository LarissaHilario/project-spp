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
             temp: data.message.filter(card=> card.temperature),
          
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
      .get('http://3.132.245.255:1234/patient/' + id)
      .then(({ data }) => {
        dispatch(
          addActiveForm({
            activeForm: {
              id: data.message.id,
              name: data.message.nombre,
              sexo: data.message.sexo,
              weight:data.message.weight,
              height: data.message.height,
              email: data.message.mail
            },
          })
        );
      })
      .catch(err => {
        console.log(err);
      });
  };
};
