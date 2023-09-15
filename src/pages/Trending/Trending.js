import classes from "./Trending.module.css"
import {useEffect, useState} from "react";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";


function Trending() {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    async function fetchTrending() {
        const {data} = await axios(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
        setContent(data.results);
    }

    useEffect(() => {
        fetchTrending();
    }, [page])
    return (
        <div>
            <span className={'pageTitle'}>Trending</span>
            <div className={classes.trending}>
                {content && content.map((item) => {
                    return <SingleContent
                        key={item.id}
                        id={item.id}
                        poster={item.poster_path} title={item.title || item.name}
                        date={item.first_air_date || item.release_date} media_type={item.media_type}
                        vote_average={item.vote_average}
                    />
                })}
            </div>
            <CustomPagination setPage={setPage}/>
        </div>
    );
}

export default Trending;