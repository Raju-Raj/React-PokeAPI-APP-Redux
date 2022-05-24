const DefaultState={
    loading:false,
    data:{},
    errorMsg:""
}

// const test = {
//     pikachu: {abilities:[]},
//     balbasour:{abilities:[]}
// }

const PokemonMultipleReducer = (state=DefaultState,action) => {
    switch(action.type){
        case "POKEMON_MULTIPLE_LOADING":
            return {
                ...state,
                loading:true,
                errorMsg:""
            }
        case "POKEMON_MULTIPLE_SUCCESS":
            return {
                ...state,
                data:{
                    ...state.data,
                    [action.pokemonName]:action.payload
                },
                loading:false,
                errorMsg:""
            }
        case "POKEMON_MULTIPLE_FAILED":
                return {
                    ...state,
                    loading:false,
                    errorMsg:action.payload
                }
        default:
            return state
    }
}

export default PokemonMultipleReducer