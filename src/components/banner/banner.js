import React from 'react';
import './banner.css';
import { useEffect } from 'react';
import axios from '../../axios';
import { API_KEY,imgUrl } from '../../constants/constants';
import { useState } from 'react';
function Banner() {
  const [movie,setMovie] =useState();
  const randomIndex = Math.floor(Math.random() * 20);
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
      setMovie(res.data.results[randomIndex])
    })
  },[])
  return (
    <div style={{backgroundImage:`url(${imgUrl+movie?.backdrop_path})` }} className='banner'>
        <div className='content'>
            <h1 className='titile'>{movie?.title}</h1>
        <div className='bannerButtons'>
           <button className='button'>Play</button>
           <button className='button'>My list</button>
        </div>
        <h1 className='discription'>{movie?.overview}</h1>
        <div className="fade"></div>
    
        </div>
    </div>
  )
}

export default Banner
