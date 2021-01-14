import React from 'react'
import ListContext from '../ListContext'
import config from '../../config'
import './CreateList.css'
import { useHistory } from 'react-router-dom'

function getHTMLOptions(array) {
    return (array.map((item, idx) => 
        <option key={idx + 1} value={item.id} name={item.id}>{item.name}</option>)
        )
}

export default function CreateList(props) {

    const { categoryState, listState, setListState } = React.useContext(ListContext)
    const options = getHTMLOptions(categoryState)
    let history = useHistory()
    
    const handleSubmitClick = (e) => {
        e.preventDefault()
        const newList = {
            name:  e.target.listname.value, 
            categoryId: e.target.category.value
        }

        fetch(`${config.API_ENDPOINT}/list`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newList)
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status)
            }
            return res.json()
        })
        .then(newList => {
            setListState([...listState, newList])
            history.push(`/list/${newList.id}`)
        })
        .catch(error => console.log(error))
        
        e.target.listname.value = ''
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