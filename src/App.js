import React, { useState } from "react";
import ListItems from "./Components/ListItems/ListItems";
import AddItems from "./Components/AddItems/AddItems";
function App(props) {
    const [items, setItems] = useState(
    [
      { id: 1, name: `Nour`, age: 23 },
      { id: 2, name: `Mahmoud`, age: 24 },
      { id: 3, name: `Soliman`, age: 25 }
    ]
    )
    const  handleDelete = (id) => {
      const newItems = items.filter(item => {
        return item.id !== id 
      })
      setItems([...newItems])
    }
    const newArray = (name) => {
      items.push(name)
      setItems([...items])
      console.log(items);
    }
  return (
    <div>
      <ListItems items = {items} handleDelete = {handleDelete}/>
      <AddItems newArray={newArray} />
    </div>
  )
}
export default App

