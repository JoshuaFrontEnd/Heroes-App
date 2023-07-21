import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

  const navigate = useNavigate();

  const onLogout = () => {
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
            Joshua
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