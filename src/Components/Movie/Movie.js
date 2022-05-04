import React, { useContext } from 'react'
import {Card, Row} from 'react-bootstrap'
import { MovieContext } from '../../Context/MovieContext'

import './Movie.css'

function Movie({movie}) {

  const MovieCtx = useContext(MovieContext)

  const handleClick = e => {
    MovieCtx.setCurrentMovie(movie)
  }

  if(movie && movie != undefined){

    return (
      <Card
        bg={'dark'}
        key={movie._id}
        text={'white'}
        style={{ width: '18rem' }}
        className="m-4 movie-card"
        onClick={handleClick}
      >
        <Card.Img className='img-cover' variant="top" src={`${movie.Poster}`} />
        <Card.Header><h5>{movie.Title}</h5></Card.Header>
  
        <Card.Body className='p-4'>
          <Row>Director: {movie.Director}</Row>
          <Row>Year: {movie.Year}</Row>
          <Row>Genre: {movie.Genre}</Row>
          <Row>Rated: {movie.Rated}</Row>
        </Card.Body>
      </Card>
    )
  }
}

export default Movie