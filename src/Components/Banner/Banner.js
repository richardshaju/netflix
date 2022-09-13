import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../../Constants/Constants'
import "./Banner.css"
const x = Math.floor((Math.random() * 15) + 1);
function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            setMovie(response.data.results[x])
        })


    })
    return (
        <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }} className='banner'>
            <div className="fade_content">
                <div className='content'>

                    <h1 className='title'>{movie ? movie.title || movie.name : ""}</h1>
                    <div className='banner_buttons'>
                        <button className='button'><i className="fa fa-play"></i>Play</button>
                        <button className='button'><i className="fa fa-bars"></i>My List</button>
                    </div>
                    <h1 className='description'>{movie ? movie.overview : ""}</h1>
                </div>
            </div>
            <div className="fade-bottom"></div>
        </div>
    )
}

export default Banner