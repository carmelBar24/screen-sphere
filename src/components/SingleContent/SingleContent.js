import classes from "./SingleContent.module.css"
import {img_300, unavailable} from "../../config/config";
import {Badge} from "@mui/material";

function SingleContent({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average}) {
return(
<div className={classes.media}>
    <Badge badgeContent={vote_average} color={vote_average>6?"primary":"secondary"}/>
    <img  className={classes.poster} src={poster?`${img_300}/${poster}`:unavailable} alt={title}/>
    <b className={classes.title}>{title}</b>
    <span className={classes.subTitle}>{media_type==='tv'?"TV Series":"Movie"}
    <span className={classes.subTitle}>
    {date}
    </span></span>
</div>
);
}

export default SingleContent;