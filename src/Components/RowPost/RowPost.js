import React, { useEffect, useState, useContext } from 'react'
import axios from '../../axios'
import './RowPost.css'
import { useNavigate } from 'react-router-dom';
import { imageUrl ,API_KEY} from '../../Constants/Constants'
import Youtube from 'react-youtube'
function RowPost(props) {



  const [movie, setmovie] = useState([])
  const navigate = useNavigate()
  const [urlId, seturlId] = useState('')
  const DetailsHandler = (data) => {

    navigate('/About', { data })
  }

  useEffect(() => {

    axios.get(props.url).then(response => {
      setmovie(response.data.results)

    }).catch(err => {
      alert()
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  }
  const HandleMovie = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      if(response.data.results.length!==0){
        seturlId(response.data.results[0])
      }else{
        alert('Currently Unavilable')
      }
    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movie.map((obj) =>
          <img onClick={() => HandleMovie(obj.id)} key={obj.id} className='poster' src={`${imageUrl + obj.poster_path}`} alt="Poster" />
        )}
      </div>
     {urlId &&  <Youtube opts={opts} videoId={urlId.key}></Youtube>}
    </div>
  )

}

export default RowPost