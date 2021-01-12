import React from 'react'
import ListContext from '../ListContext'
import './CategoryNav.css'
import { v4 as uuidv4 } from 'uuid';

export default function CreateCategory(props) {
    const { categoryState, setCategoryState } = React.useContext(ListContext)

    const handleSubmitClick = (e) => {
        e.preventDefault()
        const newCategory = {
            id: uuidv4(),
            name: e.target.catname.value
        }

        //add api call to post new category

        setCategoryState([...categoryState, newCategory])

        e.target.catname.value = ''
    }

    return (
        <form className="create-category" onSubmit={handleSubmitClick}>
            <fieldset>
                <input id="catname" type="text" required />
                <input type="submit" value="Add Category" />
            </fieldset>
        </form>
    )


}