import React from 'react'
import {Link} from 'react-router-dom'

export default function LandingPage (props){

    return (
        <main>
        <h2>Welcome to ListAble!</h2>
            <p>Now you can keep all your list types in one spot for easy retrieval! Choose from one of the categories
                below or create your own custom categories.</p>
            <ul>
                <li>Shopping lists (organize by store, and sort into aisles/dept!)</li>
                <li>Wish Lists</li>
                <li>Gift Lists</li>
                <li>Reading Lists</li>
                <li>To Do Lists (optionally enter due dates)</li>
                <li>Chore Lists (keep everyone in the family accountable!)</li>
                <li>Homework/Project task lists</li>
                <li>Goal List (don't lose sight of your short and long term goals!)</li>
                <li>Or create a custom list category to fit your needs!</li>
            </ul>

            <p><Link to="/dashboard">Get started now</Link></p>
        </main>
    )
}