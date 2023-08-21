import { useContext } from 'react';
import { AuthContext } from '../auth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {

  // Detecto si el usuario esta logeado
  const { logged } = useContext( AuthContext );

  // Si esta logeado renderiza las vistas de la pagina, si no, reenvia al login
  return ( logged )
    ? children
    : <Navigate to={'/login'} />;
}
