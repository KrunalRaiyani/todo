import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, checkBox } from '../ridux/reducers/todoReducer'

const Task = (props) => {

    let checkValue = false

    let dispatch = useDispatch()

    const ref = useRef()

    let check = () => {
        if (ref.current.checked) {
            dispatch(checkBox({ id: props.id, status: "complate" }))
        }
        else {
            dispatch(checkBox({ id: props.id, status: "pending" }))
        }
    }

    if (props.status === "complate") {
        checkValue = true
    }
    else {
        checkValue = false
    }


    return (
        <div className='todo-card' style={{ background: props.status === "complate" ? "#c3ffc6" : "#e2e2e2" }}>
            <div className='todo-div'>
                <input type="checkbox" onClick={check} ref={ref} defaultChecked={checkValue} />
                <span>{props.title}</span>
            </div>
            <button className='delete-button' onClick={() => dispatch(deleteTodo({ id: props.id }))}>Delete</button>
        </div>
    )
}

export default Task