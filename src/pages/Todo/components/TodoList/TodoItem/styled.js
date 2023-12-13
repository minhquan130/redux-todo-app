import styled, { css } from 'styled-components'

const Wrapper = styled.div`
    border-top: 1px solid #DFDFDF;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
`;

const TodoName = styled.div`
    flex-grow: 1;

    ${props => props.status && css`
        text-decoration-line: line-through;
    `}

    span {
        cursor: pointer;
    }
`

export { Wrapper, TodoName }
