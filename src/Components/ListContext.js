import React from 'react'

 const ListContext = React.createContext({
    categoryState: [],
    listState: [],
    itemState: [],
    error: '',
    setCategoryState: ()=> {},
    setListState: ()=> {},
    setItemState: ()=> {},
})

export default ListContext