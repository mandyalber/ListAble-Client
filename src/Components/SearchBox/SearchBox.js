import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import ListContext from '../ListContext'
import './SearchBox.css'

export default function SearchBox(props) {
    const { listState, itemState } = React.useContext(ListContext)
    const [error, setError] = useState('')
    //assign inputs to variables
    //loop through compare item value to items.name
    //or list value to list.name
    const handleSubmitClick = (e) => {
        e.preventDefault()/*
        const { list, item } = e.target
        let foundList, foundItem

        for (let i = 0; i < listState.length; i++) {
            if (listState[i].name.includes(list.value)) {
                foundList = listState[i].id
            }
            else {
                foundList = null
            }
        }
        for (let i = 0; i < itemState.length; i++) {
            if (itemState[i].name.includes(item.value)) {
                foundItem = itemState[i].listId
            }
            else {foundItem = null}
        }

        console.log(foundList)
        console.log(foundItem)

        if (!foundItem && !foundList) {
            setError('Nothing found')
        }
        else {
            <Redirect to={`/list/${foundList.id}`} />
        }*/


    }

    return (
        <form className="searchbox" onSubmit={handleSubmitClick}>
            <fieldset>
                <input name="list" type="text" placeholder="Search List Title" />
                <input name="item" type="text" placeholder="Search for Item" />
                <button>Search</button>
            </fieldset>
            <p className="error">{error}</p>
        </form>
    )
}