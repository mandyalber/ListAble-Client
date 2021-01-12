import React from 'react'
import ListContext from '../ListContext'
import { v4 as uuidv4 } from 'uuid';

export default function CreateList(props) {
    const { itemState, setItemState } = React.useContext(ListContext)

    const handleSubmitClick = (e) => {
        e.preventDefault()
        const newItem = {
            id: uuidv4(),
            name: e.target.addItem.value,
            listId: props.listId, 
            completed: false
        }

        //add api call to post new item

        setItemState([...itemState, newItem])

        e.target.addItem.value = ''
    }

    return (
        <form className="create-list" onSubmit={handleSubmitClick}>
            <input type="text" id="addItem" />
            <button>Add Item</button>
        </form>
    )
}