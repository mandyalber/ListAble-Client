import React from 'react'
import { Link } from 'react-router-dom'
import ListContext from '../ListContext'
import AddItem from './AddItem'
import Item from './Item'
import './ListDetail.css'

export default function ListDetail({ match }) {

    const { listState, itemState } = React.useContext(ListContext)

    const list = listState.filter(list => list.id === parseInt(match.params.listId)).pop() || { id: null }

    const items = itemState.length ? itemState.filter(item => item.listId === list.id)
        .map(item =>
            <li key={item.id}>
                <Item {...item} />
            </li>) : ''

    if (list.id) {
        return (
            <main className="list-detail">
                <Link to="/dashboard"> Back to Dashboard</Link>
                <div className="list">
                    <h2>{list.name}</h2>
                    <ul className="todo">{items}</ul>
                    <AddItem listId={list.id} />
                </div>
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