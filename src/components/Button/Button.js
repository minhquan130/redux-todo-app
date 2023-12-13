import PropTypes from 'prop-types';
import { Wrapper } from './styled'

function Button({ type, children, onClick }) {
    return (
        <Wrapper type={type} onClick={onClick}>{children}</Wrapper>
    )
}

Button.propTypes = {
    type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning'])
}

Button.defaultProps = {
    type: 'primary'
}

export default Button
