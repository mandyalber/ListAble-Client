import React from 'react'
import ListContext from '../ListContext'
import './CategoryNav.css'
import config from '../../config'
import { useHistory } from 'react-router-dom'

export default function CreateCategory(props) {
    const { categoryState, setCategoryState } = React.useContext(ListContext)
    let history = useHistory()

    const handleSubmitClick = (e) => {
        e.preventDefault()
        const newCategory = {
            name: e.target.catname.value
        }

        fetch(`${config.API_ENDPOINT}/category`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newCategory)
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status)
            }
            return res.json()
        })
        .then(newCategory => {
            setCategoryState([...categoryState, newCategory])
            history.push(`/category/${newCategory.id}`)
            document.getElementById(`${newCategory.id}`).scrollIntoView()
        })
        .catch(error => console.log(error))
        
        e.target.catname.value = ''
    }

    return (
        <form className="create-category" onSubmit={handleSubmitClick}>
            <fieldset>
                <input id="catname" type="text" placeholder="New Category" required />
                <button type="submit" className="add"/>
            </fieldset>
        </form>
    )
}