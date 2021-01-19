import React, { useState } from 'react'
import ListContext from '../ListContext'
import config from '../../config'
import './Item.css'

export default function Item(props) {
    const { itemState, setItemState } = React.useContext(ListContext)
    const [edit, setEdit] = useState(false)
    const [item, setItem] = useState(props.name)
    const [complete, setComplete] = useState(props.complete)

    const handleDeleteClick = (e) => {
        e.preventDefault()

        const itemId = e.target.value

        if (window.confirm(`Are you sure you want to delete "${item}"?`)) {
            fetch(`${config.API_ENDPOINT}/item/${itemId}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            })
                .then(() => {
                    setItemState(itemState.filter(item =>
                        parseInt(item.id) !== parseInt(itemId))
                    )
                })
                .catch(error => console.log(error))
        }
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

        const updatedItem = {
            complete: !complete
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
                setComplete(updatedItem.complete)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="item">
            {!edit ? (
                <>
                    <input type="checkbox"
                        checked={complete}
                        onChange={() => handleCheckClick(props.id)}
                    />
                    <span className={complete ? "complete" : null}>{props.name}</span>
                    <button
                        className="edit"
                        onClick={handleEdit}
                        disabled={complete}>
                    </button>
                    <button
                        className="delete"
                        name="delete"
                        value={props.id}
                        onClick={handleDeleteClick}>
                    </button>
                </>
            ) :
                (
                    <>{" "}
                        <input type="text" value={item} onChange={handleEditChange} />
                        <button className="cancel" onClick={handleEdit}/>
                        <button
                            className="save"
                            type="submit"
                            onClick={() => handleEditSubmit(props.id)}
                        />
                    </>
                )
            }
        </div>
    )
}