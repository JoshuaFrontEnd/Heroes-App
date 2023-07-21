import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components/HeroCard';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  // Si no se recibe un parametro, 'q' será un string vacío
  const { q = '' } = queryString.parse( location.search );

  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    // Para que al recargar la pagina, no se pierda lo que se escribio en el input
    searchText: q
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    if ( searchText.trim().length <= 1 ) return;

    // Con este parametro puedo colocar en la url el texto de busqueda
    navigate(`?q=${ searchText }`);
  };


  return (
    <>
    <h1>Search Page</h1>
    <hr />

    <div className="row">

      <div className="col-5">
        <h4>Searching</h4>
        <hr />
        <form onSubmit={ onSearchSubmit }>
          <input
            type="text"
            placeholder="Search a hero"
            className="form-control"
            name="searchText"
            autoComplete="off"
            value={ searchText }
            onChange={ onInputChange }
          />
          <button
            className="btn btn-outline-primary mt-3"
          >
            Search
          </button>
        </form>
      </div>
      <div className="col-7">

        <h4>Results</h4>
        <hr />

        <div className="alert alert-primary">
          Search a hero
        </div>

        <div className="alert alert-danger">
          No hero with <b>{ q }</b>
        </div>

        {
          heroes.map( hero => (
            <HeroCard key={ hero.id } { ...hero } />
          ))
        }


      </div>

    </div>


    </>
  )
}
