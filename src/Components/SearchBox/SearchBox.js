import React from 'react'
import './SearchBox.css'

export default function Dashboard(props) {
    return (
        <form className="searchbox">
            <fieldset>
                <input id="searchbox" type="text" />
                <button>Search</button>
            </fieldset>
        </form>
    )
}