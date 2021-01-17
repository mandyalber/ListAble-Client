import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import ListContext from '../ListContext'
import config from '../../config'
import './CategoryNav.css'

function Category(props) {

    const { categoryState, setCategoryState, listState, setListState } = React.useContext(ListContext)
    const [edit, setEdit] = useState(false)
    const [category, setCategory] = useState(props.name)

    const handleDeleteClick = (e) => {
        e.preventDefault()

        const categoryId = e.target.value
        fetch(`${config.API_ENDPOINT}/category/${categoryId}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' }
        })
            .then(() => {
                setCategoryState(categoryState.filter(category => 
                    parseInt(category.id) !== parseInt(categoryId))
                )
                setListState(listState.filter(list => 
                    parseInt(list.categoryId) !== parseInt(categoryId))
                )
                props.history.push(`/dashboard`)
            })
            .catch(error => console.log(error))        
    }

    const handleEdit = () => {
        setEdit(!edit)
    }

    const handleEditChange = (e) => {
        setCategory(e.target.value)
    }

    const handleEditSubmit = (id) => {

        const updatedCat = {
            name: category,
        }
        fetch(`${config.API_ENDPOINT}/category/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedCat)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(updatedCat => {
                const newCats = categoryState.map(cat => {
                    if (cat.id === id) {
                        cat.name = updatedCat.name
                    }
                    return cat
                })
                setCategoryState(newCats)
                handleEdit()
            })
            .catch(error => console.log(error))
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


export default withRouter(Category);