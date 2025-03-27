const List = () => {
    const fruits = [{ id: 1, name:"orange", calories: 45},
         { id: 2, name:"banana", calories: 105},
          { id: 3, name: "apple", calories: 95}, 
          { id: 4, name:"dates", calories: 282}, 
          { id: 5, name:"strawberry", calories: 33}];

    
    // fruits.sort((a,b)=> a.name.localeCompare(b.name)); // lexographical ascending order (by names)

    // fruits.sort((a,b)=> a.calories - b.calories); // numeric ascending (by calories)

    const lowCalFruits = fruits.filter((fruit)=> fruit.calories < 100);

    lowCalFruits.sort((a,b)=> a.calories - b.calories);

    const fruitItems = lowCalFruits.map((fruit) => 
        <li key={fruit.id}>
            {fruit.name}: &nbsp; <i> {fruit.calories} </i>
        </li>
    )

    // in case two object name property is same , we need a unique "key" prop to distinguish btwn them
    // using name here cause they are unique in this case.
    return (
        <div>
            <h1>Low Calory Fruit</h1>
            <ul>
                {fruitItems}
            </ul>
        </div>
    )
}

export default List