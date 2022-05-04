import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'

import {BsGlobe, BsLockFill} from 'react-icons/bs'
import Movie from '../Movie/Movie';
import './MovieList.css'

function MovieList({list}) {

    const {listName, movies} = list && list;

  return (
    <Card className='my-4 movielist_shadow'>
        <Card.Header className={`${list.private ? 'bg-danger':'bg-info'} text-white`}>

            <div className='d-flex justify-content-between'>
                <h4>{listName}</h4>
                {!list.private && <h4><BsGlobe /> Public</h4>}
                {list.private && <h4><BsLockFill /> Private</h4>}
            </div>

        </Card.Header>

        <Card.Body className='d-flex justify-content-start'>
            {movies && movies.length != 0 ? movies.map((movie, i)=>
                <Movie
                    key={movie._id} 
                    movie={movie}
                />
            )
            :
            <h3>No Movies Added Yet! Add Some...</h3>
        }
        </Card.Body>
    </Card>
  )
}

export default MovieList