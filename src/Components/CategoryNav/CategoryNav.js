import React from 'react'
import { NavLink } from 'react-router-dom'
import ListContext from '../ListContext'
import Category from './Category'
import './CategoryNav.css'

export default function CategoryNav(props) {
    const handleDeleteClick =(e)=>{
        e.preventDefault()
        setCategoryState(categoryState.filter(category => category.id !== e.target.value))
    }

    const { categoryState, setCategoryState } = React.useContext(ListContext)
    const categories = categoryState.map(cat =>
        <li key={cat.id}><Category id={cat.id} name={cat.name}/></li>)

    if (categories.length) {
        return <ul className="category">
            <li><NavLink to={`/dashboard`}>All Lists</NavLink></li>
            {categories}
        </ul>
    }
    return <ul className="category">Add Some New Categories</ul>
}
