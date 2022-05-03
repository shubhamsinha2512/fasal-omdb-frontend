import React from 'react'
import { Container, Button } from 'react-bootstrap'
import MovieListContainer from '../MovieListContainer/MovieListContainer'
import SearchBar from '../SearchBar/SearchBar'
import SearchResult from '../SearchResult/SearchResult'

function MainContainer() {

  return (
    <Container className='text-left'>
        <SearchBar />
        <SearchResult />

        <Container className='my-2'>
            <Button>Create New List</Button>
        </Container>

        <MovieListContainer />
    </Container>
  )
}

export default MainContainer