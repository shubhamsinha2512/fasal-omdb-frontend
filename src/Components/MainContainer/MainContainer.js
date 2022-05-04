import React from 'react'
import { Container, Button } from 'react-bootstrap'
import MovieListContainer from '../MovieListContainer/MovieListContainer'
import MovieModal from '../MovieModal/MovieModal'
import SearchBar from '../SearchBar/SearchBar'
import SearchResult from '../SearchResult/SearchResult'

function MainContainer() {

  return (
    <Container className='text-left'>

        <MovieModal />
        <SearchBar />
        <SearchResult />

        <MovieListContainer />
    </Container>
  )
}

export default MainContainer