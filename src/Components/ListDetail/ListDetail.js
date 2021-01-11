import React from 'react'
import { Link } from 'react-router-dom'
import ListContext from '../ListContext'
import './ListDetail.css'

export default function ListDetail({ match }) {

    const { listState, itemState } = React.useContext(ListContext)
    //let list = listState.filter(list => list.id === match.params.listId)

    let list = {}
    for (let i = 0; i < listState.length; i++) {
        if (listState[i].id === match.params.listId) {
            list = listState[i]
        }
    }
    const items = itemState.length ? itemState.filter(item => item.listId === list.id)
        .map(item =>
            <li key={item.id}>
                <input type="checkbox" id={item.id} />
                {item.name}
                <button>Edit</button>
                <button>Delete</button>
            </li>) : ''

    return (
        <main>
            <Link to="/dashboard">Back to Dashboard</Link>
            <h2>{list.name}</h2>
            <ul className="todo">{items}</ul>
            <input type="text" id="addItem" />
            <button>Add Item</button>
        </main>
    )
}