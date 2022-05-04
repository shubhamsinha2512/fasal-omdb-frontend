import React, { useContext } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { MovieContext } from '../../Context/MovieContext'

function SearchResult() {

    const MovieCtx = useContext(MovieContext);
    const searchResult = MovieCtx.searchResult;

    if(searchResult == null){

        return <></>    //don't show search result

    }else if(searchResult === 'not found'){
        return (
            <div>
                <Card>
                    <Card.Header>No Movie Found!</Card.Header>
                </Card>
            </div>
        )
    }else{
        return (
          <div onClick={()=>MovieCtx.setCurrentMovie(searchResult)}>
              <Card>
                  <Card.Header className='bg-primary text-white'>Search Result</Card.Header>
                  <Card.Body>
                      <Row>
                          <Col><h6>Title: {searchResult.Title}</h6></Col>
                          <Col><h6>Year: {searchResult.Year}</h6></Col>
                          <Col><h6>Director: {searchResult.Director}</h6></Col>
                          <Col><h6>Rated: {searchResult.Rated}</h6></Col>
                          <Col>Add to List</Col>
                      </Row>
                  </Card.Body>
              </Card>
          </div>
        )
    }
}

export default SearchResult