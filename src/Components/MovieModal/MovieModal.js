import React, { useState, useContext, useEffect } from 'react'
import { Modal, Button, Col, Row } from 'react-bootstrap'
import { MovieContext } from '../../Context/MovieContext'

import styles from './MovieModal.module.css'

function MovieModal() {

    const MovieCtx = useContext(MovieContext);
    const currentMovie = MovieCtx.currentMovie;

    const [show, setShow] = useState(false);

    const handleShow = e => {
        setShow(true)
    }

    const handleHide = e => {
        setShow(false)
    }

    useEffect(() => {
        if (MovieCtx.currentMovie != null) handleShow()

    }, [MovieCtx.currentMovie])

    if (currentMovie) {
        return (
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleHide}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {currentMovie.Title}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Row className='d-flex flex-wrap'>
                        <Col>
                            <Row className={styles.movie_details}><span><b>Director: </b>{currentMovie.Director}</span></Row>
                            <Row className={styles.movie_details}><span><b>Released: </b>{currentMovie.Released}</span></Row>
                            <Row className={styles.movie_details}><span><b>Plot: </b>{currentMovie.Plot}</span></Row>
                            <Row className={styles.movie_details}><span><b>Rated: </b>{currentMovie.Rated}</span></Row>
                            <Row className={styles.movie_details}><span><b>Runtime: </b>{currentMovie.Runtime}</span></Row>
                            <Row className={styles.movie_details}><span><b>Language: </b>{currentMovie.Language}</span></Row>
                            <Row className={styles.movie_details}><span><b>imdbRating: </b>{currentMovie.imdbRating}</span></Row>
                            <Row className={styles.movie_details}><span><b>BoxOffice: </b>{currentMovie.BoxOffice}</span></Row>
                            <Row className={styles.movie_details}><span><b>Type: </b>{currentMovie.Type}</span></Row>
                        </Col>

                        <Col>
                            <h5>Poster</h5>
                            <img className='movie-poster' src={currentMovie.Poster} alt={`${currentMovie.Title} Poster`}/>
                        </Col>
                    </Row>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
    else {
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            onHide={handleHide}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Can't Load Movie
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button onClick={handleHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    }

}

export default MovieModal