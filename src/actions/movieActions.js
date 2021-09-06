export const addMovie = (data, resetForm) => {
    resetForm()
    return {
        type: 'ADD_MOVIE',
        payload: data
    }
}

export const searchMovie = (query) => {
    return {
        type: 'SEARCH_MOVIE',
        payload: query
    }
}

export const deleteMovie = (id) => {
    return {
        type: 'DELETE_MOVIE',
        payload: id
    }
}