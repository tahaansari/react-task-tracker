import Button from "./Button";

const Header = ({title}) => {

    const funcShow = () => {
        console.log("i have been called in parent component")
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button bg="red" text="Add" callThisOnClick={funcShow}/>
            <Button bg="green" text="Update" />
            <Button bg="blue" text="Delete" />
        </header>
    )
}

export default Header