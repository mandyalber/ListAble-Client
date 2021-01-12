import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CreateList from '../CreateList/CreateList'
import SearchBox from '../SearchBox/SearchBox'
import ListContext from '../ListContext'
import './Dashboard.css'
import CategoryNav from '../CategoryNav/CategoryNav'

export default function Dashboard({ match }) {

    const { listState, categoryState } = React.useContext(ListContext)

    const selectedCategory = categoryState.filter(cat =>
        cat.id === match.params.categoryId).pop() || { id: null }

    const categoryLists = !match.params.categoryId ? listState :
        listState.filter(list => list.categoryId === match.params.categoryId)

    const lists = categoryLists ? categoryLists.map(list =>
        <li key={list.id}>
            <NavLink to={`/list/${list.id}`}>{list.name}
            </NavLink>
        </li>)
        : `No ${selectedCategory.name} Lists yet, create a new list below`

    return (
        <main>
            <Link to="/">Back to Home</Link>
            <h2>List Dashboard</h2>
            <SearchBox />
            <CategoryNav />
            <ul className="list">{lists}</ul>
            <CreateList />
        </main>
    )
}
