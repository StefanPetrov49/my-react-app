
function List(){

    const fruits = [{id:1, name: "apple", calories: 95},
                    {id:2, name: "banana", calories: 45},
                    {id:3, name: "orange", calories: 105}]

    const listItems = fruits.map(fruit => <li key={fruit.id}>Name: {fruit.name} Calories: {fruit.calories}</li>)
    
    return(<ul>{listItems}</ul>);
}

export default List