import React from 'react'
import './SearchBox.css'

export default function Dashboard(props) {
    return (
        <form action="#">
            <fieldset>
                <label for="searchbox">Search: </label>
                <input id="username" type="text" />
                <button>Submit</button>
            </fieldset>
        </form>
    )
}