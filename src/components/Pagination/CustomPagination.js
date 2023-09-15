
import {Pagination} from "@mui/material";
import {useState} from "react";
import createPalette from "@mui/material/styles/createPalette";

function CustomPagination({setPage,numOfPages=10}) {

    function handlePageChange(page)
    {
        setPage(page);
        window.scroll(0,0,)
    }
    return(
        <div style={{
            width:"100%",
            display:"flex",
            justifyContent:"center",
            marginTop:10,
        }}>
       <Pagination count={numOfPages} hideNextButton hidePrevButton color={"primary"} onChange={(e)=>{handlePageChange(e.target.textContent)}}/>
        </div>
    );
}

export default CustomPagination;