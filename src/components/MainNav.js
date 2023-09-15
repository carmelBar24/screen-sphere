import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MovieIcon from '@mui/icons-material/Movie';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";




export default function MainNav() {

    const [value, setValue] = React.useState(0);
    const navigator=useNavigate();
    useEffect(()=>{
        if(value===0)
        {
            navigator('/')
        }
        else if(value===1)
        {
            navigator('/movies')
        }
        else if(value===2)
        {
            navigator('/series')
        }
        else{
            navigator('/search')
        }
    },[value])
    return (
            <BottomNavigation
                style={
                    {width:'100%',
                        position:'fixed',
                        bottom:0,
                        backgroundColor:'#2d313a', zIndex:100}
                }
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction style={{color:"white"}} label="Trending" icon={<WhatshotIcon />} />
                <BottomNavigationAction style={{color:"white"}} label="Movies" icon={<MovieIcon/>} />
                <BottomNavigationAction style={{color:"white"}} label="TV Series" icon={< TvIcon/>} />
                <BottomNavigationAction style={{color:"white"}} label="Search" icon={<SearchIcon />} />
            </BottomNavigation>
    );
}