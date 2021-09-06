import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import MovieItem from './MovieItem'

const MoviesList = () => {
    const [ search, setSearch ] = useState('') 
    const [ orderBy, setOrderBy] = useState('')
    const [ results, setResults ] = useState([]) 

    const movies = useSelector((state) => {
        return state.movie
    })
    
    useEffect(() => {
        setResults([...movies])
    }, [movies])

    const handleSearch = (e) => {
        const searchInput = e.target.value
        setSearch(searchInput)
        getSearchResult(searchInput)
    }

    const getSearchResult = (search) => {
        const result = movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
        setResults(result)
    }

    const getSortedResult = (key) => {
        let result = []
        if(key === 'rank'){
            result = results.sort((a,b) => a.rank - b.rank )
        }
        else{
            result = results.sort((a,b) => {
                const aTitle =  a.title.toLowerCase(),   bTitle = b.title.toLowerCase()

                if(aTitle < bTitle){
                    return -1
                }
                if(aTitle > bTitle){
                    return 1
                }
                return 0
            })
        }
        return result
    }

    const handleSort = (e) => {
        const inputValue = e.target.value
        setOrderBy(inputValue)
        let sortedMovies = []

        if(inputValue === 'nameAsc'){
            sortedMovies = getSortedResult('name')
        }
        else if(inputValue === 'nameDesc'){
            sortedMovies = getSortedResult('name').reverse()
        }
        else if(inputValue === 'rankAsc'){
            sortedMovies = getSortedResult('rank')
        }
        else if(inputValue === 'rankDesc'){
            sortedMovies = getSortedResult('rank').reverse()
        }
        else {
            sortedMovies = [...movies]
        }
        setResults(sortedMovies)
    }

    return (
        <div className="p-2 bd-highlight">
            <div className="row">
                <div className="col-md-6">
                    <input type="text" className="form-control" 
                           value={search} 
                           onChange={handleSearch} 
                           placeholder="Search movie by name "/>
                </div>

                <div className="col-md-6">
                    <select className="form-control" name="orderedBy" value={orderBy} onChange={handleSort}>
                        <option value="">Order by</option>
                        <option value="nameAsc">Name - Ascending</option>
                        <option value="nameDesc">Name - Descending</option>
                        <option value="rankAsc">Rank - Ascending</option>
                        <option value="rankDesc">Rank - Descending</option>
                    </select>
                </div>

            </div>            
            
            <div className="row mt-3">
                {results.length > 0 ? (
                        results.map(movie => {
                            return (
                                <div className="col-md-6" key={movie.id}>
                                    <MovieItem  {...movie}/>
                                </div>
                            )
                                
                        })
                    ) : (
                        <h4>No movie found.</h4>
                    )
                }
            </div>
        </div>
    )
}

export default MoviesList