import { useMemo } from 'react';
import { HeroCard } from './';
import { getHeroesByPublisher } from '../helpers';

export const HeroList = ({ publisher }) => {

  // Acá con 'useMemo' cada vez que cambie el 'publisher' se ejecutara el callback 'getheroesByPublisher' y no cuando se cargue el componente
  const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ] );

  return (
    <div className="row row-col-1 row-cols-md-3 g-3">
      {
        heroes.map( hero => (
          <HeroCard
            key={ hero.id }
            { ...hero }
          />
        ))
      }
    </div>
  )
}
