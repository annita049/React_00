// import React from 'react'

const Student = (props) => {
  return (
    <div className="student-box">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>isStudent: {props.isStudent? "Yes":"No"}</p>
    </div>
  )
}

export default Student