import React, { useEffect, useRef, useState } from 'react'
import './Titlecard.css';
import { Link } from 'react-router-dom'


const TitleCard = ({title, category}) => {

const [apiData, setApiData] = useState([])

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmVjNDRhNDlkZjJhOThiMjVlN2Q5OWRiYjJkNWMyYiIsIm5iZiI6MTcyNjA0NDI2Mi44ODExMjQsInN1YiI6IjY2ZTE1NGNiNzQ4YzViNWI4YzA4MTFmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XPJTAt4mcrdgy-N8NYJG-2pHmbiN74S2B4thl1uQgvo'
  }
};



const cardsRef = useRef();

const handleWheel = (event) => {
  event.preventDefault;
  cardsRef.current.scrollLeft += event.deltaY
}

useEffect(() => {
  cardsRef.current.addEventListener('wheel', handleWheel)

  fetch(`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));
},)


  return (
    <div className='titlecards'>
    <h2>{title ? title : 'Popular on Netflix'}</h2>
     <div className="card-list" ref={cardsRef}>
     {apiData.map((card, index) => {
         return(
          <Link to={`/player/${card.id}`} key={index} className='cardd'>
           <img src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path} alt="" />
           <p>{card.original_title}</p>
          </Link>
         )
     })}
     
     </div>
    </div>
  )
}

export default TitleCard