import classes from "./Header.module.css"

function Header() {
    return(
        <span onClick={()=>{window.scroll(0,0)}} className={classes.header}>🎬 Screen-Sphere 🎥</span>
    );
}


export default Header;