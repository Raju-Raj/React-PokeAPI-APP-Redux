import { combineReducers } from "redux";
import PokemonMultipleReducer from "./pokemonMultipleReducers";
import PokemonListReducer from "./reducer";

const rootReducer= combineReducers({
    PokemonList:PokemonListReducer,
    Pokemon:PokemonMultipleReducer
})

export default rootReducer