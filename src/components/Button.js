import propTypeOf from 'prop-types'
const Button = ({bg,text,onToggleShow}) => {
    
    return(
        <>
            <button onClick={onToggleShow} style={ {backgroundColor:bg} } className="btn">
                {text}
            </button>
        </>
    )
}

Button.defaultProps = {
    bg: "yellow",
}

Button.propTypes = {
    bg: propTypeOf.string.isRequired,
    callThisOnClick: propTypeOf.func
}

export default Button