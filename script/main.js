import { updateFavoritesList } from './render.js';
import { searchPokemon } from './search.js';
import { saveFavorite } from './favorites.js';

window.searchPokemon = searchPokemon;
window.saveFavorite = saveFavorite;

updateFavoritesList();