import Button from "./Button";

const Header = ({title,onToggleShow, showForm}) => {

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button bg={showForm ? 'red' : 'green'} text={showForm ? 'Close' : 'Add'} onToggleShow={onToggleShow}/>
        </header>
    )
}

export default Header