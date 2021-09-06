import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const MovieStats = (props) => {
    const { movies } = useSelector((state) => {
        return state.movie
    }) 
    const [ topRanked, setTopRanked ] = useState('')

    useEffect(() => {
        if(movies.length > 0){
            const result = movies.reduce((prev, curr)  => prev.rank < curr.rank ? prev : curr) 
            setTopRanked(result.title)
        }
        
    },[movies])

    return (
        <div>
            <h5>Total Movies - {movies.length}</h5>
            <h6># Top Ranked Movie - {topRanked}</h6>
        </div>
    )
}

export default MovieStats