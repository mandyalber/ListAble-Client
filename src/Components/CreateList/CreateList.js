import React from 'react'
import ListContext from '../ListContext'
import './CreateList.css'

function getHTMLOptions (array) {
    return array.map((item, idx) => <option key={idx + 1} value={item.id}>{item.name}</option>)
}

export default function CreateList(props) {
    const { categoryState } = React.useContext(ListContext)
    const options = getHTMLOptions(categoryState)

    //api call to post new list

    return (
        <form className="create-list">
            <fieldset>
                <legend>Create a new List:</legend>
                <label htmlFor="name">List Title: </label>
                <input id="name" type="text" />
                <label htmlFor="category">Category: </label>
                <select id="category">
                    {options}
                </select>
                <input type="submit" value="Submit" />
            </fieldset>
        </form>

    )
}