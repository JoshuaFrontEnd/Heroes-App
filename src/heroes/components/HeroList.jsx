import { HeroCard } from './';
import { getHeroesByPublisher } from '../helpers';

export const HeroList = ({ publisher }) => {

  const heroes = getHeroesByPublisher( publisher );

  console.log(heroes);

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
