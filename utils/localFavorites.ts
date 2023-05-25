



const toggleFavorite = (id: number) => {

    console.log('toggleFavorite Llamado');

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');


    if(favorites.includes(id)){
        favorites = favorites.filter(pokeId => pokeId !== id);
    }else{
        favorites.push(id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));


}

const existInFavorites = (id: number): boolean => {

    // Así lo arreglamos para que no lo corra por el lado del servidor, y solo por el cliente
    if ( typeof window === 'undefined') return false;

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    // devuelve un booleano
    return favorites.includes(id);

}

const pokemons = ():number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]')
}


export default {
    toggleFavorite,
    existInFavorites,
    pokemons

}