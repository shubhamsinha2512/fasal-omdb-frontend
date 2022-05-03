import React, { useContext, useState } from 'react'
import styles from './SearchBar.module.css'

import { InputGroup, FormControl, DropdownButton, Dropdown, Button } from 'react-bootstrap'

import OMDB_API, { API_KEY } from '../../utils/OMDB_API';
import { MovieContext } from '../../Context/MovieContext';

function SearchBar() {

  const MovieCtx = useContext(MovieContext)

  const [query, setQuery] = useState('');
  const [queryType, setQueryType] = useState('TITLE')

  const handleQueryChange = e => {
    setQuery(e.target.value);
  }

  const handleQueryTypeChange = e => {
    setQueryType(e);
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if(query.trim() === ''){
      alert('Please enter movie name or id')
      return;
    }

    let res = await (await fetch(`${OMDB_API.BASE_URL}?apikey=${API_KEY}&${queryType=='TITLE'?'t':'i'}=${query}`)).json()
        
    if(res.Response === 'False'){
      MovieCtx.handleSearchResult('not found');
    }
    else {
      // console.log(res)
      MovieCtx.handleSearchResult(res);
      setQuery('');
    }
  }

  return (
    <div className={styles.searchbar_container}>
      <InputGroup className={`${styles.searchbar_input} "mb-3"`}>
        <FormControl
          className={styles.searchbar_input}
          aria-label='Search by Movie Name or IMDB ID'
          placeholder='Search by Movie Name or IMDB ID'
          value={query}
          onChange={handleQueryChange}
        />

        <DropdownButton
          variant="outline-secondary"
          title={queryType}
          defaultValue={queryType}
          align="end"
          onSelect={handleQueryTypeChange}
        >
          <Dropdown.Item eventKey="TITLE">Title</Dropdown.Item>
          <Dropdown.Item eventKey="IMDB_ID">IMDB ID</Dropdown.Item>
        </DropdownButton>

        <Button 
          variant="primary"
          onClick={handleSubmit}
        >
          Search
        </Button>
      </InputGroup>
    </div>
  )
}

export default SearchBar