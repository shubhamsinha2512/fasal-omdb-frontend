import React, { useEffect, useState } from 'react';
// import { BASE_URL, ME } from '../utils/API';

export const MovieContext = React.createContext({
    searchResult: null,
    movieLists: [],
    addMovieToList: (movie, list) => { },
    getMovieLists: () => { },
    handleSearchResult: () => { }
})

export const MovieContextProvider = (props) => {

    const initialToken = localStorage.getItem('OMDB_TOKEN') || null; //check if token already present
    const [movieLists, setMovieLists] = useState([]);
    const [searchResult, setSearchResult] = useState(null)


    const addMovieToList = () => {

    }

    const getMovieLists = () => {
        
    }

    const handleSearchResult = (result) => {
        setSearchResult(result)
    }

    const contextValue = {
        searchResult: searchResult,
        movieLists: movieLists,
        addMovieToList: addMovieToList,
        getMovieLists: getMovieLists,
        handleSearchResult: handleSearchResult
    };

    return <MovieContext.Provider value={contextValue}>
        {props.children}
    </MovieContext.Provider>
}