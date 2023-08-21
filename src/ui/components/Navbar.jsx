import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';

export const Navbar = () => {

  // El 'user' es obtenido desde el 'action.payload' creado en 'AuthProvider', esto es definido en 'authReducer.js'
  const { user, logout } = useContext( AuthContext );

  const navigate = useNavigate();

  const onLogout = () => {

    logout();

    navigate('/login', {
      replace: true
    });
  };

  return (
    <nav className="navbar navbar-expand-sm bg-dark p-3" data-bs-theme="dark">

      <Link
        className="navbar-brand"
        to="/"
      >
        Asociaciones
      </Link>

      <div className="navbar-collapse d-flex justify-content-between">
        <nav className="navbar-nav">

          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            to="/search"
          >
            Search
          </NavLink>

        </nav>
        <nav className="navbar-nav">

          <span className='nav-item nav-link text-info me-2'>
            {/* Acá obtengo el nombre de usuario desde la propiedad 'user', y al asignar el signo de interrogación le estoy diciendo a React que si la variable viene undefined no me genere error y no pinte nada (mejor que no pinte nada a que se vea el mensaje de error), si viene con texto mostrará esa información */}
            { user?.name }
          </span>

          <button
            className="btn btn-outline-danger fw-bold"
            onClick={ onLogout }
          >
            Logout
          </button>

        </nav>
      </div>

    </nav>
  )
}