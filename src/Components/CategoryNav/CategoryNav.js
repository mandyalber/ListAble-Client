import React from 'react'
import { NavLink } from 'react-router-dom'
import ListContext from '../ListContext'
import './CategoryNav.css'

export default function CategoryNav(props) {

    const { categoryState } = React.useContext(ListContext)
    const categories = categoryState.map(cat =>
        <li key={cat.id}>
            <NavLink to={`/category/${cat.id}`}>{cat.name}
            </NavLink>
        </li>)

    if (categories.length) {
        return <ul className="category">
            <li><NavLink to={`/dashboard`}>All Lists</NavLink></li>
            {categories}
        </ul>
    }
    return <ul className="category">Add Some New Categories</ul>
}
