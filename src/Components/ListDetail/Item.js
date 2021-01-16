import React, { useState } from 'react'
import ListContext from '../ListContext'
import config from '../../config'
import './Item.css'

export default function Item(props) {
    const { itemState, setItemState, onDelete } = React.useContext(ListContext)
    const [edit, setEdit] = useState(false)
    const [item, setItem] = useState(props.name)
    const [complete, setComplete] = useState(false)

    const handleDeleteClick = (e) => {
        e.preventDefault()

        const itemId = e.target.value
 
        fetch(`${config.API_ENDPOINT}/item/${itemId}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' }
        })
            .then(() => {
                onDelete(itemId)
            })
            .catch(error => console.log(error))
    }

    const handleEdit = () => {
        setEdit(!edit)
    }

    const handleEditChange = (e) => {
        setItem(e.target.value)
    }

    const handleEditSubmit = (id) => {
        const updatedItem = {
            name: item,
        }

        fetch(`${config.API_ENDPOINT}/item/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedItem)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(updatedItem => {
                const newItems = itemState.map(itm => {
                    if (itm.id === updatedItem.id) {
                        itm.name = updatedItem.name
                    }
                    return itm
                })
                setItemState(newItems)
                handleEdit()
            })
            .catch(error => console.log(error))
    }

    const handleCheckClick = (id) => {
        setComplete(!complete)
        
        const updatedItem = {
            complete: complete
        }

        fetch(`${config.API_ENDPOINT}/item/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedItem)
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status)
            }
            return res.json()
        })
        .then(updatedItem => {
            const newItems = itemState.map(itm => {
                if (itm.id === updatedItem.id) {
                    itm.complete = updatedItem.complete
                }
                return itm
            })
            setItemState(newItems)            
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="item">
            {!edit ? (
                <>
                    <input type="checkbox"
                        checked={props.complete}
                        onChange={() => handleCheckClick(props.id)}
                        //disabled={complete ? true : false}
                    />
                    <span className={complete ? "complete" : null}>{props.name}</span>
                    <button
                        onClick={handleEdit}
                        disabled={complete}>Edit
                    </button>
                    <button
                        name="delete"
                        value={props.id}
                        onClick={handleDeleteClick}>Delete
                </button>
                </>
            ) :
                (
                    <>{" "}
                        <input type="text" value={item} onChange={handleEditChange} />
                        <button onClick={handleEdit}>Cancel</button>
                        <button
                            type="submit"
                            onClick={() => handleEditSubmit(props.id)}>
                            Save
                        </button>
                    </>
                )
            }
        </div>
    )
}