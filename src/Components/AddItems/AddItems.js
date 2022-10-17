import React, { useState , useRef } from 'react'
const AddItems = (props) => {
    const inputRef = useRef(null); 
    const inputRef1 = useRef(null);
    const [name, setName] = useState([{
        name:``,
        age : ``
    }]);
    const handleChange = (e) => {
    setName({
        id:Math.random() * 15,
        name : inputRef.current.value,
        age: inputRef1.current.value,
    })
    // console.log(nour2);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.newArray(name)
    }
    return (
        <div>
            <span>Hello from Add items</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Your Name...' id="name" onChange={handleChange} ref={inputRef}></input>
                <input type="number" placeholder='Enter Your Age' id="age" onChange={handleChange} ref={inputRef1} ></input>
                <input type='submit' value="Add"/>
            </form>
        </div>
    )
}
export default AddItems