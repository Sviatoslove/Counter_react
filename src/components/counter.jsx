import { useState } from "react"

const Counter = ({
 id, 
 name, 
 value, 
 handleIncrement, 
 handleDecrement, 
 onDelete
}) => {

 const formatValue = () => {
  return value === 0 ? 'empty' : value
 }
 
 const getBadgeClasses = () => {
  let classes = "badge m-2 "
  return classes += value === 0 ? "bg-warning" : "bg-primary"
 }
 
 return(
 <div>
  <span>{name}</span>
  <span className={getBadgeClasses()}>{formatValue()}</span>
  <button className="btn btn-primary btn-sm m-2" onClick={() => handleIncrement(id)}>+</button>
  <button className="btn btn-primary btn-sm m-2" disabled={value === 0 ? true : null} onClick={() => handleDecrement(id)}>-</button>
  <button className="btn btn-danger btn-sm m-2" onClick={() => onDelete(id)}>Delete</button>
 </div>)
}

export default Counter