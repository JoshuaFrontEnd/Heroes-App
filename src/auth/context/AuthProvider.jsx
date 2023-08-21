import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';

// Creo el estado inicial a usar en 'useReducer'
// const initialState = {
//   logged: false
// };

// Acá obtengo el nombre del usuario si ha sido guardado en el 'localStorage'
const init = () => {
  const user = JSON.parse( localStorage.getItem('user') );

  return {
    // Esto es como preguntar ¿Si el usuario existe? (usando doble negacion !!)
    logged: !!user,
    user,
  }
}

// Acá estoy utilizando la propiedad 'children' de React, para pasar todos los componentes "hijos" al proveedor
export const AuthProvider = ({ children }) => {

  //Manejo el estado del proveedor con el hook 'useReducer' utilizando el reducer creado en 'authReducer.jsx'
  const [ authState, dispatch ] = useReducer( authReducer, {}, init );

  const login = ( name = '' ) => {

    // Genero la estructura del usuario
    const user = { id: 'ABC', name }

    const action = { type: types.login, payload: user }

    //Guardo el usuario en el 'localStorage'
    localStorage.setItem( 'user', JSON.stringify( user ) );

    dispatch( action );
  };

  const logout = () => {
    // Remover el usuario del 'localStorage
    localStorage.removeItem( 'user' );
    const action = { type: types.logout }
    dispatch( action );
  }

  return (
    <AuthContext.Provider value={{
      ...authState,

      // Methods
      login,
      logout
     }}>
      { children }
    </AuthContext.Provider>
  )
}

/*----------------------------------------------------------------
  Con 'AuthProvider' generamos el proveedor de contexto, usando el contexto creado en 'AuthContext.jsx'
---------------------------------------------------------------- */
