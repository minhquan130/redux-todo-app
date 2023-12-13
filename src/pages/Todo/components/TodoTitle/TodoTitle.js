import styled from 'styled-components'

const Wrapper = styled.h1`
    font-size: 36px;
    text-align: center;
    margin: 30px 0 30px 0;
`

function TodoTitle() {
    return (
        <Wrapper>My Todos</Wrapper>
    )
}

export default TodoTitle
