import React from 'react'

 const ListContext = React.createContext({
    categoryState: [],
    listState: [],
    itemState: [],
    setCategoryState: ()=> {},
    setListState: ()=> {},
    setItemState: ()=> {},
})

export default ListContext