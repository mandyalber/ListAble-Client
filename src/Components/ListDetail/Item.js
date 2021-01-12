import React, { useState } from 'react'
import ListContext from '../ListContext'
import './Item.css'

export default function Item(props) {
    const { itemState, setItemState } = React.useContext(ListContext)
    const [edit, setEdit] = useState(false)
    const [item, setItem] = useState(props.name)
    const [complete, setComplete] = useState(false)

    const handleDeleteClick = (e) => {
        e.preventDefault()
        setItemState(itemState.filter(item => item.id !== e.target.value))
    }

    const handleEdit = () => {
        setEdit(!edit)
    }

    const handleEditChange = (e) => {
        setItem(e.target.value)
    }

    const handleEditSubmit = (id) => {
        const newItems = itemState.map(itm => {
            if (itm.id === id) {
                itm.name = item
            }
            return itm
        })
        setItemState(newItems)
        handleEdit()
    }

    const handleCheckClick = (id) => {
        const newItems = itemState.map(item => {
            if (item.id === id) {
                item.complete = !item.complete
            }
            return item
        })
        setItemState(newItems)
        setComplete(!complete)
    }

    return (
        <div className="item">
            {!edit ? (
                <>
                    <input type="checkbox"
                        checked={props.complete}
                        onChange={() => handleCheckClick(props.id)}
                        disabled={props.complete ? true : false}
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