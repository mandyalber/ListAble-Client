import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import ListContext from '../ListContext'
import config from '../../config'
import './CategoryNav.css'

//displays each available category along with edit and delete buttons
function Category(props) {

    const { categoryState, setCategoryState, listState, setListState } = React.useContext(ListContext)
    const [edit, setEdit] = useState(false)
    const [category, setCategory] = useState(props.name)

    const handleDeleteClick = (e) => {
        e.preventDefault()

        const categoryId = e.target.value

        if (window.confirm(`Are you sure you want to delete "${category}"? This will also delete all lists in "${category}"`)) {
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
        <>
            {!edit ? (
                <>
                    <NavLink to={`/category/${props.id}`} id={props.id} className="item">{props.name}</NavLink>
                    <div className="item">
                        <button className="edit" onClick={handleEdit} />{' '} 
                        <button
                            className="delete"
                            name="delete"
                            value={props.id}
                            onClick={handleDeleteClick}>
                        </button>
                    </div>
                </>
            )
                : (
                    <>{" "}
                        <input type="text" value={category} onChange={handleEditChange}className="item" />
                        <div className="item">
                            <button className="cancel" onClick={handleEdit} />{' '} 
                            <button
                                className="save"
                                type="submit"
                                onClick={() => handleEditSubmit(props.id)}
                            />
                        </div>
                    </>
                )
            }
        </>
    )
}


export default withRouter(Category);