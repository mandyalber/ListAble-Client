import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ListContext from '../ListContext'
import './SearchBox.css'

//displays a search box allowing user to search for terms included in list title or item
export default function SearchBox(props) {

    const { listState, itemState } = React.useContext(ListContext)
    const [error, setError] = useState('')
    let history = useHistory()

    const handleSubmitClick = (e) => {
        e.preventDefault()
        const word = e.target.searchterm.value.toLowerCase()
        let found

        for (let i = 0; i < listState.length; i++) {
            if (listState[i].name.toLowerCase().includes(word)) {
                found = listState[i].id
                continue
            }
            else {
                for (let i = 0; i < itemState.length; i++) {
                    if (itemState[i].name.toLowerCase().includes(word)) {
                        found = itemState[i].listId
                    }
                }
            }
        }

        if (!found) {
            setError('Nothing found')
        }
        else {
            history.push(`/list/${found}`)
        }
    }

    return (
        <form className="searchbox" onSubmit={handleSubmitClick}>
            <fieldset>
                <input
                    name="searchterm"
                    type="text"
                    placeholder="Search List Title or Item"
                    required
                />
                <button className="search" />
            </fieldset>
            <p className="error">{error}</p>
        </form>
    )
}