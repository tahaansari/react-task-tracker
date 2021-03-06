import PropTypes from 'prop-types';

const Header = ({title}) => {
    return (
        <>
            <h1 style={{color:'red', backgroundColor:'black'}}>{title}</h1>
        </>
    )
}

Header.defaultProps = {
    title:"This is default title for props"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

     
export default Header
