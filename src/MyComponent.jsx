import React, {useState} from 'react'

function MyComponent(){

    const [name, setName] = useState("Guest");

    const updateName = () => {
        setName("Stefano");
    }

    const [number, setNumber] = useState(0);

    const add = () => {
        setNumber(number + 1)
    }

    const remove = () => {
        setNumber(number - 1)
    }

    const reset = () => {
        setNumber(0)
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Number: {number}</p>
            <button onClick={() => add()}>Add 1</button>
            <button onClick={() => reset()}>Reset</button>
            <button onClick={() => remove()}>Remove 1</button>
        </div>
    );
}

export default MyComponent