import React from 'react'
import ListContext from '../ListContext'
import './CreateList.css'
import { v4 as uuidv4 } from 'uuid';

function getHTMLOptions(array) {
    return (array.map((item, idx) => 
        <option key={idx + 1} value={item.id} name={item.id}>{item.name}</option>)
        )
}

export default function CreateList(props) {
    const { categoryState, listState, setListState } = React.useContext(ListContext)
    const options = getHTMLOptions(categoryState)
    
    const handleSubmitClick = (e) => {
        e.preventDefault()
        const newList = {
            id: uuidv4(),
            name:  e.target.listname.value, 
            categoryId: e.target.category.value
        }

        //add api call to post new list

        setListState([...listState, newList])
    }

    return (
        <form className="create-list" onSubmit={handleSubmitClick}>
            <fieldset>
                <legend>Create a new List:</legend>
                <label htmlFor="name">List Title: </label>
                <input id="listname" name="list-name" type="text" required/>
                <label htmlFor="category">Category: </label>
                <select id="category">
                    {options}
                </select>
                <input type="submit" value="Submit" />
            </fieldset>
        </form>
    )
}