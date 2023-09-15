import classes from "./Root.module.css"
import {Outlet} from "react-router-dom";
import Header from "../../components/Header/Header";
import MainNav from "../../components/MainNav";
function Root() {
    return(
        <>
            <Header/>
            <div className={classes.app}>
                <Outlet></Outlet>
            </div>
            <MainNav/>

        </>
    );
}

export default Root;