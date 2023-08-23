import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const TaskList = () => {

  let taskList = useSelector((state) => state.todo)
  const [status, setStatus] = useState("all")

  localStorage.setItem("todoList", JSON.stringify(taskList));
  
  return (
    <div className='todo-list-container'>
      <div className='filter'>
        <button className='filter-btn' onClick={() => setStatus("all")} style={{ background: status === "all" ? "#c3ffc6" : "#e2e2e2" }}>All</button>
        <button className='filter-btn' onClick={() => setStatus("complate")} style={{ background: status === "complate" ? "#c3ffc6" : "#e2e2e2" }}>Completed</button>
        <button className='filter-btn' onClick={() => setStatus("pending")} style={{ background: status === "pending" ? "#c3ffc6" : "#e2e2e2" }}>Pending</button>
      </div>
      {
        taskList.map((e) => {
          if (status === "all") {
            return <Task key={e.id} title={e.title} id={e.id} status={e.status} />
          }
          else if (status === "complate") {
            return e.status === "complate" && <Task key={e.id} title={e.title} id={e.id} status={e.status} />
          }
          else if (status === "pending") {
            return e.status !== "complate" && <Task key={e.id} title={e.title} id={e.id} status={e.status} />
          }
        })
      }
    </div>
  )
}

export default TaskList