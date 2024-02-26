import React, {useState} from "react";

function UpdateArray(){
    const [foods, setFoods] = useState(["Apple", "Orange"]);

    const style = {
       cursor: "pointer"
    }

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = ""

        setFoods(f => [...f, newFood])
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((element, i) => i !== index));
    }

    return(<div>
        <h2>List of foods</h2>
        <ul>
            {foods.map((food, index) => 
            <li key={index} style={style} onClick={() => handleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name"></input>
        <button onClick={handleAddFood}>Add food</button>
    </div>);
}

export default UpdateArray