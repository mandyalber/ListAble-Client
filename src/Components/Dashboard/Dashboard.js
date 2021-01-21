import React from 'react'
import { Link } from 'react-router-dom'
import CreateList from '../ListNav/CreateList'
import SearchBox from '../SearchBox/SearchBox'
import ListContext from '../ListContext'
import './Dashboard.css'
import CategoryNav from '../CategoryNav/CategoryNav'
import CreateCategory from '../CategoryNav/CreateCategory'
import ListNav from '../ListNav/ListNav'

//displays the dashboard containing the category nav, list nav, search and add features
export default function Dashboard({ match }) {
    const matchId = match?.params || { categoryId: null }

    const { categoryState, error } = React.useContext(ListContext)

    const selectedCategory = categoryState.filter(cat =>
        cat.id === parseInt(matchId.categoryId)).pop() || { id: null }

    if (!error) {
        return (
            <main className="dashboard">
                <Link to="/" className="nav">Back to Home</Link>
                <h2>List Dashboard</h2>
                <SearchBox /><CreateCategory />
                <CategoryNav />
                <ListNav category={selectedCategory} matchId={matchId} />
                <CreateList category={selectedCategory} />
            </main>
        )
    }
    return (
        <main className="dashboard">
            <Link to="/" className="nav">Back to Home</Link>
            <h2>List Dashboard</h2>
            <p>{error}</p>
        </main>
    )
}
