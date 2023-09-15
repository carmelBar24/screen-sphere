import classes from "./Search.module.css"
import {useEffect, useState} from "react";
import {Button, Tab, Tabs, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

function Search()
{
    async function fetchSearch() {
        const {data} = await axios.get(`https://api.themoviedb.org/3/search/${type?"tv":"movie"}?api_key=${process.env.REACT_APP_API_KEY }&language=en-US&query=${searchText}&page=${page}&include_adult=false`);
        setContent(data.results);
        setNumOfPages(data.total_pages);
    }
    const [page,setPage]=useState(1);
    const [type,setType]=useState(0);
    const [content,setContent]=useState("");
    const [searchText,setSearchText]=useState("");
    const [numOfPages,setNumOfPages]=useState(0);
    useEffect(() => {
        window.scroll(0,0);
        fetchSearch();
    },[type,page]);
    return (
        <>
        <div style={{display:"flex", margin:"15px 0"}}>
            <TextField
                style={{ flex:1,backgroundColor:"white"}}
                className="searchBox"
                label={"Search"}
                variant={"filled"}
                onChange={(e)=>{setSearchText(e.target.value)}}
            />
            <Button variant={'contained'} style={{marginLeft:10}} onClick={fetchSearch}><SearchIcon/></Button>
        </div>
        <Tabs value={type} indicatorColor={"primary"} style={{paddingBottom:5}} textColor={"white"} onChange={(event,newValue)=>{
            setType(newValue);
            setPage(1);
        }}>
            <Tab style={{width:"50%"}} label={"Search Movies"}></Tab>
            <Tab style={{width:"50%"}} label={"Search TV Series"}></Tab>
        </Tabs>
            <div className={classes.search}>
                {content && content.map((item) => {
                    return <SingleContent
                        key={item.id}
                        id={item.id}
                        poster={item.poster_path} title={item.title || item.name}
                        date={item.first_air_date || item.release_date} media_type={type?"tv":"movie"}
                        vote_average={item.vote_average}
                    />
                })}
                {searchText&&!content&&type?<h2>No Series found</h2>:<h2>No Movies found</h2>}
            </div>
            {numOfPages > 1 &&
                <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
            }
            </>
    );
}

export default Search;