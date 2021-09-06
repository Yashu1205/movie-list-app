import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addMovie } from "../actions/movieActions"

const AddMovie = (props) => {
    const [title, setTitle] = useState('')
    const [rank, setRank] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const nameAttr = e.target.name
        if(nameAttr === "title"){
            setTitle(e.target.value)
            if(formErrors.title){
                setFormErrors({...formErrors, title: ''})
            }
        }
        else if(nameAttr === 'rank'){
            setRank(e.target.value)
            if(formErrors.rank){
                setFormErrors({...formErrors, rank: ''})
            }
        }
    }

    const runValidations = () => {
        if(title.trim().length === 0){
            errors.title = 'Title is required'
        }
        if(rank.trim().length === 0){
            errors.rank = 'Rank is required'
        } else if(Number(rank) <= 0){
            errors.rank = 'Rank should be greater than 0'
        } else if(isNaN(rank)){
            errors.rank = 'Please enter the rank in number'
        }
    }

    const resetForm = () => {
        setTitle('')
        setRank('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()

        if(Object.keys(errors).length > 0){
            setFormErrors(errors)
        }
        else{
            setFormErrors({})
            const formData = {
                id: Number(new Date()),
                title: title,
                rank: Number(rank)
            }
            dispatch(addMovie(formData, resetForm))
        }
    }

    const handleCancel = (e) => {
        e.preventDefault()
        setFormErrors({})
        resetForm()
    }

    return (
        <div  style={{padding: '10px 0'}}>
            <h3>Add Movie</h3>
            <form onSubmit={handleSubmit}>
                <input type="text"  className="form-control mb-2" name="title" value={title} onChange={handleChange} placeholder="Enter movie name"/>
                { formErrors.title && <span className="text-danger"> { formErrors.title }<br/></span> }

                <input type="text" className="form-control mb-2"  name="rank" value={rank} onChange={handleChange}  placeholder="IMDB Ranking"/>
                { formErrors.rank && <span className="text-danger"> { formErrors.rank } <br/></span> }

                <input type="submit" value="save" className="btn btn-primary btn-sm" style={{marginRight:'5px' }}/>
                <input type="button" value="cancel" className="btn btn-secondary btn-sm" onClick={handleCancel} />

            </form>
        </div>
    )
}

export default AddMovie