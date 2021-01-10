import React from 'react'
import { Link } from 'react-router-dom'
import './ListDetail.css'

export default function ListDetail(props) {
    return (
        <main>
            <Link to="/dashboard">Back to Dashboard</Link>
            <h2>[List Title]</h2>
            <ul class="todo">
                <li>
                    <input type="checkbox" id="item1" />item to do <button>Edit</button><button>Delete</button></li>
                <li><input type="checkbox" />item to do  <button>Edit</button><button>Delete</button></li>
                <li><input type="checkbox" />item to do  <button>Edit</button><button>Delete</button></li>
                <li><input type="checkbox" />item to do  <button>Edit</button><button>Delete</button></li>
                <li><input type="checkbox" />item to do  <button>Edit</button><button>Delete</button></li>
                <li><input type="checkbox" />item to do  <button>Edit</button><button>Delete</button></li>
                <li><input type="checkbox" />item to do  <button>Edit</button><button>Delete</button></li>
                <li><input type="checkbox" />item to do  <button>Edit</button><button>Delete</button></li>
            </ul>
            <input type="text" id="addItem" />
            <button>add item</button>
        </main>
    )
}