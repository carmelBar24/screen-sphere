import classes from "./Movies.module.css"
import {useEffect, useState} from "react";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Genres from "../../components/Genres"
import useGenres from "../../hooks/useGenres";
function Movies()
{
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [numOfPages,setNumOfPages]=useState();
    const [selectedGenres,setSelectedGenres]=useState([]);
    const [genres,setGenres]=useState([]);
    const genresUrl=useGenres((selectedGenres));

    async function fetchMovies() {
        const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genresUrl}`);
        setContent(data.results);
        setNumOfPages(data.total_pages);
    }
    useEffect(() => {
        fetchMovies();
    },[page,genresUrl]);
    return (
        <div>
            <span className={"pageTitle"}>Movies</span>
            <Genres
            type={'movie'}
            selectedGenres={selectedGenres}
            genres={genres}
            setGenres={setGenres}
            setSelectedGenres={setSelectedGenres}
            setPage={setPage}
            />
            <div className={classes.movies}>
                {content && content.map((item) => {
                    return <SingleContent
                        key={item.id}
                        id={item.id}
                        poster={item.poster_path} title={item.title || item.name}
                        date={item.first_air_date || item.release_date} media_type={'movie'}
                        vote_average={item.vote_average}
                    />
                })}
            </div>
            {numOfPages > 1 &&
                <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
            }
        </div>
    );
}

export default Movies;