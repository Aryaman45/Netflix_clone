import React , {useState , useEffect} from 'react'
import axios from './axios'
import requests from './request'
import "./Banner.css"
function Banner() {

    const[movies , setMovies] = useState([]);

    useEffect( ()=> {

       

        async function fetchdata(){


            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
            );
            return request;
        }

        fetchdata()


    } , []);

    
    

   
    function truncateString(str, n) {
      return str?.length > n ? str.substr(0 , n-1) + ". . ." : str;
    }
 

   
  return (
    
   
    <header className='Banner' 
    style={{
        backgroundSize :"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition: "center center" ,
    }}>
        <div className='Banner_content'>
            <h1 className='Banner_title'>
                {movies?.title || movies?.original_name || movies?.name}
            </h1>

            <div className='Buttons'>

            <button className='Banner_button'>Play</button>
            <button className='Banner_button'>My List</button>

            </div>


            <div className='banner_description'>
                <h1>
                    {truncateString(movies?.overview , 100)}
                </h1>
            </div>
        </div>

        <div className='banner-fade' />

    </header>
  )
}

export default Banner