import { heroes } from "../data/heroes";

  // Si no se recibe un parametro, 'name' será un string vacío
export const getHeroesByName = ( name = '' ) => {

  // Formateo el parametro para que quede toda la palabra en minuscula y luego le quito los espacios adelante y atras
  name = name.toLowerCase().trim();

  // Si el usuario no ha ingresado ningun termino de busqueda regreso un string vacío
  if ( name.length === 0 ) return [];

  // Acá filtro el arreglo de heroes y voy iterando heroe por heroe si el parametro ingresado es parte del nombre del heroe
  return heroes.filter(
    hero => hero.superhero.toLocaleLowerCase().includes( name )
  )
}