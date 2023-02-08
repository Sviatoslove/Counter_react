import { useState } from 'react'
import  Counter from './counter'

const CountersList = () => {
 const initialState = [
  {id: 0, value: 0, name: 'Ненужная вещь'}, 
  {id: 1, value: 0, name: 'Ложка'},
  {id: 2, value: 0, name: 'Вилка'},
  {id: 3, value: 0, name: 'Тарелка'},
  {id: 4, value: 0, name: 'Набор минималиста'}
 ]
 
 const [counters, setCounters] = useState(initialState)

 const handleDelete = id => {
  setCounters(counters => counters.filter(count => count.id !== id))
 }

 const handleReset = () => {
  setCounters(initialState)
 }

 const handleIncrement = id => {
  const currentState = counters.map(item => item.id === id ? {...item, value: ++ item.value} : item)
  setCounters(currentState)
 }

 const handleDecrement = id => {
  const currentState = counters.map(item => item.id === id ? {...item, value: -- item.value} : item)
  setCounters(currentState)
 }

 return <>
  {counters.map(count => 
   <Counter 
   key={count.id} 
   {...count}
   onDelete={handleDelete}
   handleIncrement={handleIncrement}
   handleDecrement={handleDecrement}
   />
  )}
  <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
 </>
}

export default CountersList