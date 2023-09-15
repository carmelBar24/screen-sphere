import axios from "axios";
import {useEffect} from "react";
import {Chip} from "@mui/material";

function Genres({
                    type,
                    selectedGenres,
                    genres,
                    setGenres,
                    setSelectedGenres,
                    setPage}) {
    async function fetchGenres() {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        setGenres(data.genres);

    }
    function handleAdd(genre) {
        setSelectedGenres([...selectedGenres,genre]);
        setGenres(genres.filter((g)=>g.id!==genre.id));
        setPage(1);
    }
    function handleRemove(genre) {
        setGenres([...genres,genre]);
        setSelectedGenres(selectedGenres.filter((g)=>g.id!==genre.id));
        setPage(1);
    }
    useEffect(() => {
        fetchGenres();
        return ()=>{
            setGenres([]);
        }
    },[]);

    return(
        <div style={{padding:"6px 0"}}>
            {selectedGenres&&selectedGenres.map((genre)=>{
                return (<Chip key={genre.id} label={genre.name}  color="primary" style={{margin:2}} clickable  onDelete={()=>handleRemove(genre)} size={"small"}/>);
            })}
            {genres&&genres.map((genre)=>{
              return (<Chip key={genre.id} label={genre.name} style={{backgroundColor:"white",margin:2}} clickable onClick={()=>handleAdd(genre)} size={"small"}/>);
            })}
        </div>
    );
}

export default Genres;