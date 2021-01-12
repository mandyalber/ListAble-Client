import React, { useState } from 'react'
import ListContext from '../ListContext'
import './ListDetail.css'

export default function Item(props) {
    const { itemState, setItemState } = React.useContext(ListContext)
    const [edit, setEdit] = useState(false)
    const [item, setItem] = useState(props.name)

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

    const completedTodo = (id) => {
        const newItems = itemState.map(item => {
            if (item.id === id) {
                item.completed = !item.completed
            }
            return item
        })

        setItemState(newItems)
    }

    return (
        <div className="item">
            {!edit ? (
                <>
                    <input type="checkbox"
                        checked={props.completed}
                        onChange={() => completedTodo(props.id)}
                        disabled={props.completed ? true : false}
                    />
                    {props.name}
                    <button
                        onClick={handleEdit}
                        disabled={props.completed}>Edit
                    </button>
                    <button
                        name="delete"
                        value={props.id}
                        onClick={handleDeleteClick}>Delete
                </button>
                </>
            )
                :
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