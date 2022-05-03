import React, { useState } from 'react'
import styles from './SearchBar.module.css'


function SearchBar() {

  const [query, setQuery] = useState('');

  const handleChange = e => {
    
  }

  return (
    <div className={styles.searchbar_container}>
      <input type="text" value={query} onChange={handleChange} />
    </div>
  )
}

export default SearchBar