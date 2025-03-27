// import { useState } from 'react'
// import Button from './Components/Button';
// import Student from './Components/Student';
// import UserGreeting from './Components/UserGreeting';
import List from './Components/List';

function App() {
  const fruits = [
    { id: 1, name:"orange", calories: 45},
    { id: 2, name:"banana", calories: 105},
    { id: 3, name: "apple", calories: 95}, 
    { id: 4, name:"dates", calories: 282}, 
    { id: 5, name:"strawberry", calories: 33}
  ];

  const vegetables = [{ id: 6, name:"potatoes", calories: 110},
    { id: 7, name:"celery", calories: 15},
    { id: 8, name: "carrot", calories: 25}, 
    { id: 9, name:"broccoli", calories: 50}
  ];

  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
    </>
  )
}

export default App
