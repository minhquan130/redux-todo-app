import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { todoAdd } from '@/store/modules/todo/actions'
import Button from '@/components/Button'

import { Wrapper, InputForm } from './styled'

function TodoForm() {
    const dispatch = useDispatch()

    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSave = () => { 
        if (value) {
            dispatch(todoAdd(value))
            setValue('')
        }
    }

    return (
        <Wrapper>
            <InputForm value={value} onChange={handleChange} />
            <Button onClick={handleSave}>Save</Button>
        </Wrapper>
    )
}

export default TodoForm
