import React from 'react'

import MoviesList from "./MoviesList"
import AddMovie from './AddMovie'
import MovieStats from './MovieStats'

const MoviesContainer = (props) => {


    return (
            <div className="row">
                <div className="col-md-8">
                    <MoviesList />    
                </div>
                <div className="col-md-4 mt-2">
                    <div className="p-2 bd-highlight card mb-3">
                        <AddMovie />
                    </div>
                    <div className="p-2 bd-highlight card">
                        <MovieStats />
                    </div>
                </div>

            </div>
    )
}

export default MoviesContainer