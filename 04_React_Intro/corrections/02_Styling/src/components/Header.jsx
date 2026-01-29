import Navigation from "./Navigation";

const Header = () => {
    const headerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "90%"
    }
    return(
        <header style={headerStyle}>
            <h1 style={{color: "blue"}}>Coffee Shop</h1>
            <Navigation />
        </header>
    )
}

export default Header;