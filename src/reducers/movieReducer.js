const initialMovies = []

const movieReducer = (state = initialMovies, action) => {
    switch(action.type){
        case "ADD_MOVIE" : {
            return [ action.payload, ...state]
        }

        case 'DELETE_MOVIE': {
            const result = state.filter(movie => movie.id !== action.payload)
            return result
        }

        default : {
            return state        
        }
    }

}

export default movieReducer