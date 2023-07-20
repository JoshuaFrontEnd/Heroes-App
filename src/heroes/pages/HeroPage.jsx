import { Navigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers';

export const HeroPage = () => {

  const { id } = useParams();

  const hero = getHeroById( id );

  // Si el heroe no existe, me redirecciona a la pagina de DC
  if ( !hero ) {
    return <Navigate to={'/dc'} />;
  }

  return (
    <h1>Hero Page</h1>
  )
}
