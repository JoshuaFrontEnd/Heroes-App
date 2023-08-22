import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  // Acá estoy llamando a la propiedad 'login' pero del componenete '<AuthContext />' declarado en 'AuthProvider.jsx'
  const { login } = useContext( AuthContext );
  const navigate = useNavigate();

  const onLogin = () => {

    // Busco en el 'localStorage' la ultima ruta, si es null asigna una ruta vacia
    const lastPath = localStorage.getItem( 'lastPath' ) || '/';

    // La funcion 'login' recibe un nombre como parametro
    login( 'Joshua Torres' );

    navigate( lastPath, {
      replace: true
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={ onLogin }
      >
        Login
      </button>
    </div>
  )
}
