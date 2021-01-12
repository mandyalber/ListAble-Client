import React from 'react'
import { Link } from 'react-router-dom'
import ListContext from '../ListContext'
import AddItem from './AddItem'
import './ListDetail.css'

export default function ListDetail({ match }) {
    const handleDeleteClick = (e) => {
        e.preventDefault()
        setItemState(itemState.filter(item => item.id !== e.target.value))
    }

    const { listState, itemState, setItemState } = React.useContext(ListContext)
    const list = listState.filter(list => list.id === match.params.listId).pop() || { id: null }
    const items = itemState.length ? itemState.filter(item => item.listId === list.id)
        .map(item =>
            <li key={item.id}>
                <input type="checkbox" id={item.id} />
                {item.name}
                <button>Edit</button>
                <button name="delete" value={item.id} onClick={handleDeleteClick}>Delete</button>
            </li>) : ''

            

    if (list.id) {
        return (
            <main>
                <Link to="/dashboard">Back to Dashboard</Link>
                <h2>{list.name}</h2>
                <ul className="todo">{items}</ul>
                <AddItem listId={list.id} />
            </main>
        )
    }
    return (
        <main>
            <Link to="/dashboard">Back to Dashboard</Link>
            <p>List not Found</p>
        </main>
    )
}