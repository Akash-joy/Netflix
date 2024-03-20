import React, { useEffect, useState } from 'react'
import "./rowPost.css";
import axios from '../../axios';
import { imgUrl,API_KEY } from '../../constants/constants';
import Youtube from 'react-youtube'
function RowPost(props) {
  const [movies,setMovies] = useState([]);
  const [movieUrlID,setMovieUrlID] = useState('');
  useEffect(()=>{
      axios.get(props.url).then((res)=>{
        setMovies(res.data.results  )
      })
      .catch((err)=>console.log(err));
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };  
  const handleMovie = (id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{ 
      if(res.data.results.length !==0){
        console.log(res.data.results[0].id)
        setMovieUrlID(res.data.results[0]);
      }
       
     
    })
    .catch((err)=>console.log(err));
  }
  return (
   
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {
            movies.map((movie,index)=>{

              return(
                <div>
                  <img id={index} onClick={()=>handleMovie(movie.id)} className={props.isSmall ? "smallPoster" : "poster" } src={`${imgUrl+movie.backdrop_path}`} alt="poster" />
                </div>
              )
            })
          }
            
          

        </div>
    { movieUrlID &&   <Youtube  opts={opts} videoId={movieUrlID}/> }

    </div>
  )
}

export default RowPost
