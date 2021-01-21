import React from 'react'
import ListContext from '../ListContext'
import config from '../../config'
import './CreateList.css'
import { useHistory } from 'react-router-dom'

//displays add list input, available category to choose and sends POST request to server
export default function CreateList(props) {

    function getHTMLOptions(array) {
        return (array.map((item, idx) => {
            if (props.category.id === item.id) {
                return (
                    <option
                        key={idx + 1} value={item.id} name={item.id} value="selected">
                        {item.name}
                    </option>
                )
            }
            return <option key={idx + 1} value={item.id} name={item.id}>{item.name}</option>
        }))
    }

    const { categoryState, listState, setListState } = React.useContext(ListContext)
    const options = getHTMLOptions(categoryState)
    let history = useHistory()

    const handleSubmitClick = (e) => {
        e.preventDefault()
        const newList = {
            name: e.target.listname.value,
            categoryId: e.target.category.value
        }

        fetch(`${config.API_ENDPOINT}/list`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newList)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(newList => {
                setListState([...listState, newList])
                history.push(`/list/${newList.id}`)
            })
            .catch(error => console.log(error))

        e.target.listname.value = ''
    }

    return (
        <form className="create-list" onSubmit={handleSubmitClick}>
            <fieldset>
                <label htmlFor="name">Add List: </label>
                <input id="listname" placeholder="List title" type="text" required />
                <label htmlFor="category">Category: </label>
                <select id="category">
                    {options}
                </select>
                <button type="submit" className="add" />
            </fieldset>
        </form>
    )
}