import { createReducer } from '@reduxjs/toolkit'

import { todoAdd, todoRemove, todoToggleStatus } from './actions'

const reducer = createReducer({
    data: [],
  }, (builder) => {
    builder
    .addCase(todoAdd.fulfilled, (state, action) => {
        state.data = [
            ...state.data,
            action.payload,
        ]
    })
    .addCase(todoRemove.fulfilled, (state, action) => {
        state.data = state.data.filter(todo => todo.id !== action.payload)
    })
    .addCase(todoToggleStatus.fulfilled, (state, action) => {
        state.data = state.data.map(todo => {
            if (todo.id === action.payload) {
                return {
                    ...todo,
                    status: !todo.status
                }
            }

            return todo
        })
    })
  })

  export default reducer
