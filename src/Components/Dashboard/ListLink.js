import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ListContext from '../ListContext'
import './Dashboard.css'


export default function ListLink(props) {

    const { listState, setListState } = React.useContext(ListContext)
    const [edit, setEdit] = useState(false)
    const [list, setList] = useState(props.name)

    const handleDeleteClick = (e) => {
        e.preventDefault()
        setListState(listState.filter(list => list.id !== e.target.value))
    }

    const handleEdit = () => {
        setEdit(!edit)
    }

    const handleEditChange = (e) => {
        setList(e.target.value)
    }

    const handleEditSubmit = (id) => {
        const newLists = listState.map(lst => {
            if (lst.id === id) {
                lst.name = list
            }
            return lst
        })
        setListState(newLists)
        handleEdit()
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