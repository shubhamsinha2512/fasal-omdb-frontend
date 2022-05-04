import React, { useContext, useState } from 'react'
import { Card, Row, Col, Dropdown, Button, DropdownButton, InputGroup } from 'react-bootstrap';
import { MovieContext } from '../../Context/MovieContext'

function SearchResult() {

    const MovieCtx = useContext(MovieContext);
    const searchResult = MovieCtx.searchResult;
    const availableLists = MovieCtx.availableLists;

    const [selectedList, setSelectedList] = useState({listName:'Select List'})

    const handleListChange = e => {
        let selectObj = availableLists.find(l => l.listId == e)
        setSelectedList(selectObj)
    }

    const handleSubmit = e => {
        e.preventDefault()
        // console.log(searchResult)
        MovieCtx.addMovieToList(selectedList.listId, searchResult)
        MovieCtx.handleSearchResult(null)
    }

    //return element to be rendered
    if (searchResult == null) {

        return <></>    //don't show search result

    } else if (searchResult === 'not found') {
        return (
            <div>
                <Card>
                    <Card.Header>No Movie Found!</Card.Header>
                </Card>
            </div>
        )
    } else {
        return (
            <div onClick={() => MovieCtx.handleCurrentMovie(searchResult)}>
                <Card>
                    <Card.Header className='bg-primary text-white'>Search Result</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col><h6>Title: {searchResult.Title}</h6></Col>
                            <Col><h6>Year: {searchResult.Year}</h6></Col>
                            <Col><h6>Director: {searchResult.Director}</h6></Col>
                            <Col><h6>Rated: {searchResult.Rated}</h6></Col>
                            {availableLists && availableLists.length != 0 && 
                            <Col>
                                <InputGroup>
                                    <DropdownButton
                                        variant="outline-secondary"
                                        title={selectedList.listName}
                                        value={selectedList.listId}
                                        align="end"
                                        onSelect={handleListChange}
                                    >
                                        {availableLists.map((li, i)=>
                                            <Dropdown.Item 
                                                key={li.listId}
                                                eventKey={li.listId}
                                            >
                                                {li.listName}
                                            </Dropdown.Item>
                                        )
                                        }
                                    </DropdownButton>

                                    <Button
                                        variant="primary"
                                        onClick={handleSubmit}
                                    >
                                        Add
                                    </Button>
                                </InputGroup>
                            </Col>}
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default SearchResult