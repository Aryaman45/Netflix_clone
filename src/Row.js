import React , {useState , useEffect} from 'react'
import YouTube from 'react-youtube';
import axios from './axios'
import "./Row.css"

import movieTrailer from 'movie-trailer';


const baseURL = "https://image.tmdb.org/t/p/original/";
function Row({title , fetchURL , isLarge}) {
    const [movies , setMovies] = useState([]);
    const [movietrailer , setmovieTrailer] = useState("");
   
    useEffect(() => {
    
         async function fetchdata(){
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;

        }

        fetchdata();


    } , [fetchURL]);

    const opts= {
      height: '390',
      width: ' 100% ',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    const handleclick = (movie) =>{
      if(movieTrailer){
        setmovieTrailer('');

      }else{

        movietrailer(movie?.name || "")
        .then((url) =>{

          const urlParams = new URLSearchParams(new URL(url).search);
          setmovieTrailer(urlParams.get("v"));


        })
        .catch((error) => console.log(error))

      }



    }





  return (
    <div className='row'> 
        <h2>{title}</h2>

        <div className='Row_poster'>

          {movies.map(movie => (
            <img
           key={movie.id}
           onClick = {()=> handleclick(movie)}
            className= {`Raw_poster ${isLarge && "Raw_posterLarge"}`}
            src={`${baseURL}${isLarge ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            />
            ))}
        </div>

   

    </div>
  )
}

export default Row;