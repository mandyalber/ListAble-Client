import React from 'react'
import { Link } from 'react-router-dom'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import ListContext from '../ListContext'
import AddItem from './AddItem'
import Item from './Item'
import './ListDetail.css'

//displays selected list along with category it belongs to, items associated
export default function ListDetail({ match }) {

    const { listState, itemState, categoryState, setItemState } = React.useContext(ListContext)

    const list = listState.filter(list => list.id === parseInt(match.params.listId)).pop() || { id: null }

    const category = categoryState.filter(cat => cat.id === parseInt(list.categoryId)).pop() || { id: null }

    const items = itemState.length ? itemState.filter(item => item.listId === list.id)
        .map((item, index) =>
            <Draggable key={item.id} draggableId={item.name} index={index}>
                {(provided) => (
                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <Item {...item} />
                    </li>
                )}
            </Draggable>) : ''

    const handleOnDragEnd = (result) => {
        if (!result.destination) {
            return
        }
        const items = Array.from(itemState)
        const [reorderedItem] = items.splice(result.source.index, 1)

        items.splice(result.destination.index, 0, reorderedItem)

        setItemState(items)
        console.log(itemState)
    }

    if (list.id) {
        return (
            <main className="list-detail animate__animated animate__fadeIn">
                <Link to="/dashboard" className="nav"> Back to Dashboard</Link>
                <h3>{category.name}</h3>
                <div className="list">
                    <h2>{list.name}</h2>
                    <AddItem listId={list.id} />
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Droppable droppableId="list-items">
                            {(provided) => (
                                <ul
                                    className="todo"
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}>
                                    {items.length ? items : ''}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
            </main>
        )
    }
    return (
        <main>
            <Link to="/dashboard" className="nav">Back to Dashboard</Link>
            <p>List not Found</p>
        </main>
    )
}