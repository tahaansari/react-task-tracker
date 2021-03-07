import propTypeOf from 'prop-types'
const Button = ({bg,text,callThisOnClick}) => {
    
    return(
        <>
            <button onClick={callThisOnClick} style={ {backgroundColor:bg} } className="btn">
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