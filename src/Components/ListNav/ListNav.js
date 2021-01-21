import React from 'react'
import ListContext from '../ListContext'
import ListLink from '../ListNav/ListLink'
import './ListNav.css'


//displays the available list links
export default function ListNav(props) {

    const { listState } = React.useContext(ListContext)

    const categoryLists = !props.matchId.categoryId ? listState :
        listState.filter(list => list.categoryId === parseInt(props.matchId.categoryId))

    const lists = categoryLists.length ? categoryLists.map(list =>
        <li key={list.id} className="listlink animate__animated animate__fadeIn">
            <ListLink id={list.id} name={list.name} />
        </li>) : ''

    if (lists.length) {
        return <ul className="lists">{lists}</ul>
    }
    return <p>No {props.category.name || ''} Lists yet, create a new list below</p>
}
