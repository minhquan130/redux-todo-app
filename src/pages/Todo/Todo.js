import { TodoWrapper, TodoContainer } from './styled'
import TodoTitle from './components/TodoTitle'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function Todo() {
    return (
        <TodoWrapper>
            <TodoContainer>
                <TodoTitle />
                <TodoForm />
                <TodoList />
            </TodoContainer>
        </TodoWrapper>
    )
}

export default Todo
