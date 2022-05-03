import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'

import {BsGlobe, BsLockFill} from 'react-icons/bs'

function MovieList({list}) {

    const {listName, movies} = list && list;

  return (
    <Card>
        <Card.Header className='bg-success text-white'>

            <div className='d-flex justify-content-between'>
                <h4>{listName}</h4>
                {!list.private && <h4><BsGlobe /> Public</h4>}
                {list.private && <h4><BsLockFill /> Private</h4>}
            </div>

        </Card.Header>

        <Card.Body>
            {movies && movies.length != 0 && movies.map((movie, i)=>
                <Card
                    bg={'info'}
                    key={movie._id}
                    text={'white'}
                    style={{ width: '18rem' }}
                    className="mb-2"
                >
                    <Card.Img variant="top" src="" />
                    <Card.Header>{movie.Title}</Card.Header>

                    <Card.Body className='p-4'>
                        <Row>Director: {movie.Director}</Row>
                        <Row>Year: {movie.Year}</Row>
                        <Row>Genre: {movie.Genre}</Row>
                        <Row>Rated: {movie.Rated}</Row>
                    </Card.Body>
                </Card>
            )}
        </Card.Body>
    </Card>
  )
}

export default MovieList