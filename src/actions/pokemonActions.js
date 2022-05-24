import axios from "axios"


export const GetPokemonList=(page) => async (dispatch) =>{
    try{
        const perPage = 9
        const offset = (page * perPage)-perPage
        await dispatch({type:"POKEMON_LIST_LOADING"})

        const res=await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`)

        await dispatch({type:"POKEMON_LIST_SUCCESS",payload:res.data})

    }catch(err){
        await dispatch({type:"POKEMON_LIST_FAILED",payload:err})
    }
}


export const GetPokemon = (pokemon) => async dispatch => {
    try{
        
        await dispatch({type:"POKEMON_MULTIPLE_LOADING"})

        const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

        await dispatch({type:"POKEMON_MULTIPLE_SUCCESS",payload:res.data,pokemonName:pokemon})

    }catch(err){
        await dispatch({type:"POKEMON_MULTIPLE_FAILED",payload:err})
    }
}

