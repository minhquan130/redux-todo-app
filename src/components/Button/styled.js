import styled from 'styled-components'

const backgroundColor = {
    primary: '#017BFE',
    secondary: '#6C757D',
    success: '#28A745',
    danger: '#DC3545',
    warning: '#FFC10A'
}

const textColor = {
    primary: '#fff',
    secondary: '#fff',
    success: '#fff',
    danger: '#fff',
    warning: '#000',
}

const Wrapper = styled.button`
    background-color: ${ props => backgroundColor[props.type] };
    color: ${ props => textColor[props.type] };
    padding: 6px 12px;
    border-radius: 4px;
    border: 1px solid transparent;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`

export { Wrapper }
