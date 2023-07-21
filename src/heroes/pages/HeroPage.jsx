import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers';
import { useMemo } from 'react';

export const HeroPage = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  /* ----------------------------------------------------------------

    Cuando declaramos funciones o valores adentro de un 'functional component' React las volvera a renderizar cada vez que se cargue el componente, o cada vez que cambie el estado de los valores del componente, esto puede perjudicar el rendimiento de la aplicación, para resolver esto necesitamos memorizar estos datos.

    Podemos usar 'useMemo' para memorizar los valores y 'useCallback' para memorizar las funciones

    Esto mismo se aplicara en 'HeroList.jsx'

  ---------------------------------------------------------------- */

  // En este caso 'useMemo' va a disparar el callback cada vez que sus dependencias cambien, y no cuando el componente se cargue o se vuelva a renderizar, es decir, solo va a ejecutarse la función 'getHeroById' cuando cambie el 'id'
  const hero = useMemo( () => getHeroById( id ), [id] );

  const onNavigateBack = () => {
    // Acá se pueden usar muchas tecnicas, pero por ahora solo regresaremos a la pagina anterior del historial
    navigate(-1);
  };

  // Si el heroe no existe, me redirecciona a la pagina de DC
  if ( !hero ) {
    return <Navigate to={'/dc'} />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${ id }.jpg`}
          alt={ hero.superhero }
          className='img-thumbnail animate__animated animate__fadeInLeft'
        />
      </div>
      <div className="col-8">

        <h3>{ hero.superhero }</h3>

        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego:</b> { hero.alter_ego } </li>
          <li className='list-group-item'><b>Publisher:</b> { hero.publisher } </li>
          <li className='list-group-item'><b>First appearance:</b> { hero.first_appearance } </li>
        </ul>

        <h5 className='mt-3'>Characters</h5>
        <p>{ hero.characters }</p>

        <button
          className='btn btn-outline-primary'
          onClick={ onNavigateBack }
        >
          Regresar
        </button>

      </div>
    </div>
  )
}
