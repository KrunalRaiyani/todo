import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../ridux/reducers/todoReducer'

const TaskInput = () => {

  let dispatch = useDispatch()

  const ref = useRef()

  let handleClick = () => {
    dispatch(addTodo({ title: ref.current.value }))
  }

  return (
    <div className='task-input' >
      <input type="text" ref={ref} />
      <button className='add-btn' onClick={handleClick}>Add Task</button>
    </div>
  )
}

export default TaskInput