import React from 'react'
import { Container } from 'react-bootstrap'
import MovieListContainer from '../MovieListContainer/MovieListContainer'
import SearchBar from '../SearchBar/SearchBar'
import SearchResult from '../SearchResult/SearchResult'

function MainContainer() {

  return (
    <Container>
        <SearchBar />
        <SearchResult />
        <MovieListContainer />
    </Container>
  )
}

export default MainContainer