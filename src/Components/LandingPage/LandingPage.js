import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

//displays welcome page
export default function LandingPage(props) {

    return (
        <main className="landing">
            <h2>Welcome to <span className="title">ListAble</span>!</h2>
            <p>Keep all your lists in one spot for easy retrieval! Create lists and categories to organize and keep track of everything you need to get done!</p>

            <p>Some examples of possible list categories include:</p>
            <ul className="sample-list">
                <li>Shopping lists (organize by store!)</li>
                <li>Wish Lists</li>
                <li>Gift Lists</li>
                <li>Reading Lists</li>
                <li>To Do Lists</li>
                <li>Chore Lists (keep everyone in the family accountable!)</li>
                <li>Homework/Project task lists</li>
                <li>Goal List (don't lose sight of your short and long term goals!)</li>
                <li>Or create a custom list category to fit your needs!</li>
            </ul>            
            <p><Link to="/dashboard" className="nav">Get started now</Link></p>
        </main>
    )
}