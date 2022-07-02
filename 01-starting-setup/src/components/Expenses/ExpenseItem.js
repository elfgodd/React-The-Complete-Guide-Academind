import React, { useState } from 'react'

import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem(props) {
  // let title = props.title
  const [title, setTitle] = useState(props.title)
  console.log('ExpenseItem evaluated by React')

  const clickHandler = () => {
    // title = 'Updated!'
    setTitle('Updated')
    console.log(title)
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem