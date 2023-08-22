import { useContext } from 'react';
import { AuthContext } from '../auth';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {

  // Detecto si el usuario esta logeado
  const { logged } = useContext( AuthContext );
  const { pathname, search } = useLocation();

  // Seteando el path de la ruta en cual me encuentro navegando, de esta manera podre utilizarla para mostrarla al volver a hacer login
  const lastPath = pathname + search;
  localStorage.setItem( 'lastPath', lastPath );

  // Si esta logeado renderiza las vistas de la pagina, si no, reenvia al login
  return ( logged )
    ? children
    : <Navigate to={'/login'} />;
}

/* ----------------------------------------------------------------
  Con el Hook 'useLocation' puedo obtener información sobre la pagina en la cual me encuentro, uno de los usos que se le puede dar a esta información es capturar la ultima pagina en la cual estuve antes de deslogearme, de esa manera si me vuelvo a logear puedo mostrarle al usuario el estado de la pagina tal cual la dejo antes de cerrar sesión
---------------------------------------------------------------- */
