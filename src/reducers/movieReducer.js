const localData = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) :  []
const initialMovies = {data: 
                        { movies: localData}
                     }


const movieReducer = (state = initialMovies.data, action) => {
    switch(action.type){
        case "ADD_MOVIE" : {
            const newMovies = [action.payload, ...state.movies]
            localStorage.setItem('movies', JSON.stringify(newMovies))
            return {...state, movies: newMovies}
        }

        case 'DELETE_MOVIE': {
            const result = state.filter(movie => movie.id !== action.payload)
            return {...state, movies: result}
        }

        default : {
            return state        
        }
    }

}

export default movieReducer