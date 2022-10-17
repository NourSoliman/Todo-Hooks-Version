import React  from 'react'
const ListItems = (props) => {
// function ListItems({items , handleDelete}) {
    const  items  = props.items;
    const handleDelete = props.handleDelete;
    let length = items.length
        const newItems = length ? items.map((item) => {
        return (
            <div key={item.id}>
                <span>{item.name}</span>
                <span>{item.age}</span>
                <span onClick={() => handleDelete(item.id)}>&times;</span>
            </div>

        )

    }): <p>There's No items to show</p>
    return (
        <div>{newItems}</div>
    )
}

export default ListItems