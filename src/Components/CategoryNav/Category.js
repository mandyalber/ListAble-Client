import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ListContext from '../ListContext'
import './CategoryNav.css'

export default function Category(props) {

    const { categoryState, setCategoryState } = React.useContext(ListContext)
    const [edit, setEdit] = useState(false)
    const [category, setCategory] = useState(props.name)

    const handleDeleteClick = (e) => {
        e.preventDefault()
        setCategoryState(categoryState.filter(category => category.id !== e.target.value))
    }

    const handleEdit = () => {
        setEdit(!edit)
    }

    const handleEditChange = (e) => {
        setCategory(e.target.value)
    }

    const handleEditSubmit = (id) => {
        const newCats = categoryState.map(cat => {
            if (cat.id === id) {
                cat.name = category
            }
            return cat
        })
        setCategoryState(newCats)
        handleEdit()
    }

    return (
        <div>
            {!edit ? (
                <div>
                    <NavLink to={`/category/${props.id}`}>{props.name}</NavLink>
                    <button onClick={handleEdit}>Edit</button>
                    <button name="delete" value={props.id} onClick={handleDeleteClick}>X</button>
                </div>
            )
                : (
                    <>{" "}
                        <input type="text" value={category} onChange={handleEditChange} />
                        <button onClick={handleEdit}>Cancel</button>
                        <button
                            type="submit"
                            onClick={() => handleEditSubmit(props.id)}>
                            Save
                        </button>
                    </>
                )
            }
        </div>
    )
}


