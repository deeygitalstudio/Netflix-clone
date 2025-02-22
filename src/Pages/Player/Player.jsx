import React, { useEffect,  useState, } from 'react'
import './Player.css'
import backIcon from '../../assets/back_arrow_icon.png'
import {useParams, useNavigate} from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate()

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  })

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmVjNDRhNDlkZjJhOThiMjVlN2Q5OWRiYjJkNWMyYiIsIm5iZiI6MTcyNjA0NDI2Mi44ODExMjQsInN1YiI6IjY2ZTE1NGNiNzQ4YzViNWI4YzA4MTFmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XPJTAt4mcrdgy-N8NYJG-2pHmbiN74S2B4thl1uQgvo'
  }
};

useEffect(() => {
 

fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results[0]))
  .catch(err => console.error(err));

})





  return (
    <div className='player'>
    <img src={backIcon} alt='' onClick={() => {navigate(-2)}} />
   <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title="trailer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <div className='player-info'>
    <p>{apiData.published_at.slice(0, 10)}</p>
    <p>{apiData.name}</p>
    <p>{apiData.type}</p>
    
    </div>
    </div>
  )
}

export default Player
