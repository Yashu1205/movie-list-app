import React from "react"
import { useDispatch } from "react-redux"

import { deleteMovie } from "../actions/movieActions"

const MovieItem = (props ) => {
    const { id, title, rank } = props
    const dispatch = useDispatch()

    const handleDeleteMovie = () => {
        dispatch(deleteMovie(id))
    }

    return (
        <div className="card mb-3">
            <div className="card-body d-flex">
                <img src="logo512.png" alt="movie poster" height="150px" width="150px"/>
                <div className="ml-5">
                    <h6 className="card-title" >{title}</h6>
                    <p className="card-text">#{rank}</p>
                    <button className="btn btn-sm btn-danger" onClick={handleDeleteMovie}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
} 

export default MovieItem