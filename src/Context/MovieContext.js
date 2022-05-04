import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import APP_API from '../utils/APP_API';

export const MovieContext = React.createContext({
    searchResult: null,
    currentMovie: null,
    movieLists: [],
    addMovieToList: (movie, list) => { },
    getMovieLists: () => { },
    handleSearchResult: () => { },
    setCurrentMovie: () => {}
})

export const MovieContextProvider = (props) => {

    const AuthCtx = useContext(AuthContext);

    const [movieLists, setMovieLists] = useState([]);
    const [currentMovie, setCurrentMovie] = useState(null);
    const [searchResult, setSearchResult] = useState(null);


    const addMovieToList = async () => {

    }

    const getMovieLists = async () => {
        let res = await (await fetch(APP_API.MOVIE_LIST,{
            method:'GET',
            headers: {
                'Authorization': `Bearer ${AuthCtx.token}`
            }
        })).json()

        if(res.status === 'success'){
            setMovieLists(res.data.movieLists)
            console.log(res.data.movieLists)
        }
    }

    const handleSearchResult = (result) => {
        setSearchResult(result)
    }

    const contextValue = {
        searchResult: searchResult,
        movieLists: movieLists,
        addMovieToList: addMovieToList,
        getMovieLists: getMovieLists,
        handleSearchResult: handleSearchResult,
        setCurrentMovie : setCurrentMovie
    };


    useEffect(()=>{
        if(AuthCtx.token){
            getMovieLists()
        }
    }, [AuthCtx.token])

    return <MovieContext.Provider value={contextValue}>
        {props.children}
    </MovieContext.Provider>
}