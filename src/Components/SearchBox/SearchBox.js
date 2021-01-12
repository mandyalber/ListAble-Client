import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ListContext from '../ListContext'
import './SearchBox.css'

export default function SearchBox(props) {

    const { listState, itemState } = React.useContext(ListContext)
    const [error, setError] = useState('')
    let history = useHistory()

    const handleSubmitClick = (e) => {
        e.preventDefault()
        const word = e.target.searchterm.value.toLowerCase()
        let found

        for (let i = 0; i < listState.length; i++) {
            if (listState[i].name.toLowerCase() === word) {
                console.log(listState[i].name, word)
                found = listState[i].id
                console.log(found)
                continue
            }
            else {
                for (let i = 0; i < itemState.length; i++) {
                    if (itemState[i].name.toLowerCase() === word) {
                        found = itemState[i].listId
                        console.log(found)
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
                <input name="searchterm" type="text" placeholder="Search List Title or Item" />
                <button>Search</button>
            </fieldset>
            <p className="error">{error}</p>
        </form>
    )
}