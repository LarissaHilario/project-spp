import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const authState = localStorage.getItem('token');
  return authState !== null ? children : <Navigate to={'/login'} />;
};

export default PrivateRoutes;
