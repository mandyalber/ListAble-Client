import React from 'react'
import ListContext from '../ListContext'
import config from '../../config'

export default function CreateList(props) {
    const { itemState, setItemState } = React.useContext(ListContext)

    const handleSubmitClick = (e) => {
        e.preventDefault()
        const newItem = {
            name: e.target.addItem.value,
            listId: props.listId, 
            completed: false
        }

        fetch(`${config.API_ENDPOINT}/item`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newItem)
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status)
            }
            return res.json()
        })
        .then(newItem => {
            setItemState([...itemState, newItem])
        })
        e.target.addItem.value = ''
    }

    return (
        <form className="create-list" onSubmit={handleSubmitClick}>
            <input type="text" id="addItem" required/>
            <button>Add Item</button>
        </form>
    )
}