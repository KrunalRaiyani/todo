import { createSlice } from "@reduxjs/toolkit";

let todoSlice = createSlice({
    name: "todo",
    initialState: JSON.parse(localStorage.getItem("todoList"))?JSON.parse(localStorage.getItem("todoList")):[],
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: Date.now(),
                title: action.payload.title,
                status: "current"
            })
        },
        deleteTodo: (state, action) => {
            return state.filter((e) => {
                return e.id !== action.payload.id
            })
        },
        checkBox: (state, action) => {
            state.map((e) => {
                if (e.id === action.payload.id) {
                    e.status = action.payload.status
                }

            })
        }

    }

})

export default todoSlice.reducer
export let { addTodo, deleteTodo, checkBox } = todoSlice.actions