import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { MovieContext } from '../../Context/MovieContext'
import MovieList from './MovieList'

function MovieListContainer() {

  const MovieCtx = useContext(MovieContext);
  const movieLists = MovieCtx.movieLists;

  return (
    <Container className='my-4'>
      {movieLists && movieLists.length != 0 && 
      movieLists.map((list, i)=>
        <MovieList 
          key={list._id}
          list={list}
        />
      )}
    </Container>
  )
}

export default MovieListContainer