import React from 'react'
import './CreateList.css'

export default function CreateList(props) {

    //api call to post new list

    return (
        <form class="create-list">
            <fieldset>
                <legend>Create a new List:</legend>
                <label for="name">List Title: </label>
                <input id="name" type="text" />
                <label for="category">Category: </label>
                <select id="category">
                    <option>Shopping List</option>
                    <option>Wish List</option>
                    <option>Gift List</option>
                    <option>Reading List</option>
                    <option>To Do List</option>
                    <option>Chore List</option>
                    <option>Homework/Project task List</option>
                    <option>Goal List</option>
                    <option>Custom List</option>
                </select>
                <input type="submit" value="Submit" />
            </fieldset>
        </form>

    )
}