import { createAsyncThunk } from '@reduxjs/toolkit'

import { insertTodo } from './services'

const todoAdd = createAsyncThunk('todo/add', (value) => {
    const todo = insertTodo(value)

    return todo;
})

const todoRemove = createAsyncThunk('todo/remove', (id) => {
    // Call api to remove todo

    return id;
})

const todoToggleStatus = createAsyncThunk('todo/toggleStatus', (id) => {
    return id;
})

export {
    todoAdd,
    todoRemove,
    todoToggleStatus,
}
