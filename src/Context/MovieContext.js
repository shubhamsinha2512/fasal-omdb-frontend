import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import APP_API from '../utils/APP_API';

export const MovieContext = React.createContext({
    searchResult: null,
    currentMovie: null,
    movieLists: [],
    availableLists: [],
    addMovieToList: (movie, list) => { },
    getMovieLists: () => { },
    handleSearchResult: () => { },
    handleCurrentMovie: () => {}
})

export const MovieContextProvider = (props) => {

    const AuthCtx = useContext(AuthContext);

    const [movieLists, setMovieLists] = useState([]);
    const [availableLists, setAvailableLists] = useState([]);
    const [currentMovie, setCurrentMovie] = useState(null);
    const [searchResult, setSearchResult] = useState(null);


    const addMovieToList = async (listId, movie) => {
        let res = await (await fetch(APP_API.MOVIE_LIST+`/${listId}`,{
            method:'PATCH',
            headers: {
                'Authorization': `Bearer ${AuthCtx.token}`,
                'Content-Type':'application/json'
            },
            'body': JSON.stringify({
                "movies" : [{...movie}]
            })
        })).json()

        if(res.status === 'success'){
            getMovieLists()
        }
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
            setAvailableLists(res.data.movieLists.map(m => {
                return {
                    listId: m._id,
                    listName: m.listName
                }
            }))
            // console.log(res.data.movieLists)
        }
    }

    const handleSearchResult = (result) => {
        setSearchResult(result)
    }

    const handleCurrentMovie = (movie) => {
        setCurrentMovie(movie)
    }

    const contextValue = {
        searchResult: searchResult,
        currentMovie: currentMovie,
        movieLists: movieLists,
        availableLists: availableLists,
        addMovieToList: addMovieToList,
        getMovieLists: getMovieLists,
        handleSearchResult: handleSearchResult,
        handleCurrentMovie : handleCurrentMovie
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