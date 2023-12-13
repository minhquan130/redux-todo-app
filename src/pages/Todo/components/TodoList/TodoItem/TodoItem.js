import { useDispatch } from 'react-redux'

import { todoRemove, todoToggleStatus } from '@/store/modules/todo/actions'

import Button from '@/components/Button'
import { Wrapper, TodoName } from './styled'

function TodoItem({ value, id, status }) {
    const dispatch = useDispatch()

    const handleRemove = () => {
        const isConfirmed = window.confirm('Bạn có chắc chắn muốn xóa không?')

        if (isConfirmed) {
            dispatch(todoRemove(id))
        }
    }

    const handleToggleStatus = () => {
        dispatch(todoToggleStatus(id))
    }

    return (
        <Wrapper>
            <TodoName status={status}>
                <span onClick={handleToggleStatus}>{value}</span>
            </TodoName>
            <Button type="danger" onClick={handleRemove}>Remove</Button>
        </Wrapper>
    )
}

export default TodoItem
