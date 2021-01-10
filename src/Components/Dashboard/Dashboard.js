import React from 'react'
import { Link } from 'react-router-dom'
import CreateList from '../CreateList/CreateList'
import SearchBox from '../SearchBox/SearchBox'
import './Dashboard.css'

export default function Dashboard(props) {
    return (
        <main>
            <Link to="/">Back to Home</Link>
            <h2>List Dashboard</h2>
            <SearchBox/>
            <ul class="category">
                <Link to="/list-detail"><li>Shopping Lists</li></Link>
                <Link to="/list-detail"><li>To Do Lists</li></Link>
                <Link to="/list-detail"><li>Project Lists</li></Link>
                <Link to="/list-detail"><li>Chore Lists</li></Link>
            </ul>
            <CreateList/>
        </main>
    )
}