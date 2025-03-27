const List = ({items, category}) => {
    
    // fruits.sort((a,b)=> a.name.localeCompare(b.name)); // lexographical ascending order (by names)

    // fruits.sort((a,b)=> a.calories - b.calories); // numeric ascending (by calories)

    // const lowCalFruits = fruits.filter((fruit)=> fruit.calories < 100);
    // lowCalFruits.sort((a,b)=> a.calories - b.calories);

    const Items = items.map((item) => 
        <li key={item.id}>
            <i> {item.name}: </i> &nbsp; {item.calories} 
        </li>
    )

    // in case two object name property is same , we need a unique "key" prop to distinguish btwn them
    // using name here cause they are unique in this case.
    return (
        <div class="listing">
            <h3 className="items-category">{category}</h3>
            <ul>
                {Items}
            </ul>
        </div>
    )
}

export default List