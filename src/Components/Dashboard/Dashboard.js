import React from 'react'
import { Link} from 'react-router-dom'
import CreateList from '../CreateList/CreateList'
import SearchBox from '../SearchBox/SearchBox'
import ListContext from '../ListContext'
import './Dashboard.css'
import CategoryNav from '../CategoryNav/CategoryNav'
import CreateCategory from '../CategoryNav/CreateCategory'
import ListLink from './ListLink'

export default function Dashboard({ match }) {

    const { listState, categoryState } = React.useContext(ListContext)

    const selectedCategory = categoryState.filter(cat =>
        cat.id === parseInt(match.params.categoryId)).pop() || { id: null }

    const categoryLists = !match.params.categoryId ? listState :
        listState.filter(list => list.categoryId === parseInt(match.params.categoryId))

    const lists = categoryLists.length ? categoryLists.map(list =>
        <li key={list.id}><ListLink id={list.id} name={list.name}/></li>)
        : `No ${selectedCategory.name||''} Lists yet, create a new list below`

    return (
        <main className="dashboard">
            <Link to="/">Back to Home</Link>
            <h2>List Dashboard</h2>
            <SearchBox /><CreateCategory />
            <CategoryNav />
            <ul className="lists">{lists}</ul>
            <CreateList />
        </main>
    )
}
