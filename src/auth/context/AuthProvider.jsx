import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';

// Creo el estado inicial a usar en 'useReducer'
const initialState = {
  logged: false
};

// Acá estoy utilizando la propiedad 'children' de React, para pasar todos los componentes "hijos" al proveedor
export const AuthProvider = ({ children }) => {

  //Manejo el estado del proveedor con el hook 'useReducer' utilizando el reducer creado en 'authReducer.jsx'
  const [ authState, dispatch ] = useReducer( authReducer, initialState );

  const login = ( name = '' ) => {
    const action = {
      type: types.login,
      payload: {
        id: 'ABC',
        name
      }
    }

    dispatch( action );
  };

  return (
    <AuthContext.Provider value={{
      ...authState,
      login
     }}>
      { children }
    </AuthContext.Provider>
  )
}

/*----------------------------------------------------------------
  Con 'AuthProvider' generamos el proveedor de contexto, usando el contexto creado en 'AuthContext.jsx'
---------------------------------------------------------------- */
