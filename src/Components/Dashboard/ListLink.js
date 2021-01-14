import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ListContext from '../ListContext'
import config from '../../config'
import './Dashboard.css'


export default function ListLink(props) {

    const { listState, setListState } = React.useContext(ListContext)
    const [edit, setEdit] = useState(false)
    const [list, setList] = useState(props.name)

    const handleDeleteClick = (e) => {
        e.preventDefault()
        const listId = e.target.value
        fetch(`${config.API_ENDPOINT}/list/${listId}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' }
        })
            .then(() => {
                setListState(listState.filter(list => list.id !== listId))
            })
            .catch(error => console.log(error))
    }

    const handleEdit = () => {
        setEdit(!edit)
    }

    const handleEditChange = (e) => {
        setList(e.target.value)
    }

    const handleEditSubmit = (id) => {
        const updatedList = {
            name: list,
        }
        fetch(`${config.API_ENDPOINT}/list/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedList)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(updatedList => {
                const newLists = listState.map(lst => {
                    if (lst.id === id) {
                        lst.name = updatedList.name
                    }
                    return lst
                })
                setListState(newLists)
                handleEdit()
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            {!edit ? (
                <>
                    <NavLink to={`/list/${props.id}`}>{props.name}</NavLink>
                    <button onClick={handleEdit}>Edit</button>
                    <button name="delete" value={props.id} onClick={handleDeleteClick}>Delete</button>
                </>
            ) :
                (
                    <>{" "}
                        <input type="text" value={list} onChange={handleEditChange} />
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