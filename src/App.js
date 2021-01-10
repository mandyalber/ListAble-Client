import React, { useState, useEffect } from 'react';
import {Route, Switch} from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import Dashboard from './Components/Dashboard/Dashboard'
import ListDetail from './Components/ListDetail/ListDetail'
import store from './dummy-store'
import './App.css'

function App() {
  const [categoryList, setCategoryList] = useState([])
  const [listList, setListList] = useState([])
  const [itemList, setItemList] = useState([])

  const {categories, lists, items} = store
  useEffect (()=> {
    setCategoryList(categories)
    setListList(lists)
    setItemList(items)
  })

  return (
    <div className="App">  
      <header><h1>ListAble</h1></header>  
      <Switch>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/list-detail" component={ListDetail}/>
      <Route path="/" component={LandingPage}/>
      </Switch>
      <footer>Created by Amanda Alber 2020</footer>
    </div>
  );
}

export default App;
