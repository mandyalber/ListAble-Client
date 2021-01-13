import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import Dashboard from './Components/Dashboard/Dashboard'
import ListDetail from './Components/ListDetail/ListDetail'
import ListContext from './Components/ListContext'
import store from './dummy-store'
import config from './config'
import './App.css'

function App() {
  const [categoryState, setCategoryState] = useState([])
  const [listState, setListState] = useState([])
  const [itemState, setItemState] = useState([])

  useEffect(() => {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/category`),
      fetch(`${config.API_ENDPOINT}/list`),
      fetch(`${config.API_ENDPOINT}/item`),
    ])
      .then(([catRes, listRes, itemRes]) => {
        if (!catRes.ok) {
          throw new Error(catRes.status)
        }
        if (!listRes.ok) {
          throw new Error(listRes.status)
        }
        if (!itemRes.ok) {
          throw new Error(itemRes.status)
        }
        return Promise.all([catRes.json(), listRes.json(), itemRes.json()])
      })
      .then(([categories, lists, items]) => {
        setCategoryState(categories)
        setListState(lists)
        setItemState(items)
      })
      .catch(error => console.log(error))
  }, [])

  const contextValue = {
    categoryState,
    listState,
    itemState,
    setCategoryState,
    setListState,
    setItemState
  }

  return (
    <ListContext.Provider value={contextValue}>
      <div className="App">
        <header><h1>ListAble</h1></header>
        <Switch>
          <Route path={["/dashboard", "/category/:categoryId"]} component={Dashboard} />
          <Route path="/category/:categoryId" component={Dashboard} />
          <Route path="/list/:listId" component={ListDetail} />
          <Route path="/" component={LandingPage} />
        </Switch>
        <footer>Created by Amanda Alber 2020</footer>
      </div>
    </ListContext.Provider>
  );
}

export default App;
