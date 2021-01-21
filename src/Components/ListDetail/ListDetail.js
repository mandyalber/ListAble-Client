import React from 'react'
import { Link } from 'react-router-dom'
import ListContext from '../ListContext'
import AddItem from './AddItem'
import Item from './Item'
import './ListDetail.css'

//displays selected list along with category it belongs to, items associated
export default function ListDetail({ match }) {

    const { listState, itemState, categoryState } = React.useContext(ListContext)
    
    const list = listState.filter(list => list.id === parseInt(match.params.listId)).pop() || { id: null }
    
    const category = categoryState.filter(cat => cat.id === parseInt(list.categoryId)).pop() || { id: null }
   
    const items = itemState.length ? itemState.reverse().filter(item => item.listId === list.id)
        .map(item => <li key={item.id}><Item {...item} /></li>) : ''

    if (list.id) {
        return (
            <main className="list-detail animate__animated animate__fadeIn">
                <Link to="/dashboard"  className="nav"> Back to Dashboard</Link>
                 <h3>{category.name}</h3>
                 <div className="list">                   
                    <h2>{list.name}</h2>
                    <AddItem listId={list.id} />
                    <ul className="todo">{items}</ul>                    
                </div>
            </main>
        )
    }
    return (
        <main>
            <Link to="/dashboard"  className="nav">Back to Dashboard</Link>
            <p>List not Found</p>
        </main>
    )
}