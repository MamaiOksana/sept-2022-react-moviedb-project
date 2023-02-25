import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";

import '../MovieInfo/MovieInfo.css'
import {urls} from "../../configs";

const MovieInfo = () => {

    const {id} = useParams()
    const dispatch = useDispatch()

    const {movie} = useSelector(state => state.movies)

    useEffect(() => {
        dispatch(movieActions.getMovieById({id}))
    }, [])

    console.log(movie)

    return (
        <div className={'background'}>
            <div className={'infoContainer'}>
                <img src={`${urls.poster}${movie?.poster_path}`}/>
                <div>
                    <h1>{movie?.original_title}</h1>
                    <p><b>Status:</b> {movie?.status}</p>
                    <p><b>Original language: </b>{movie?.original_language}</p>
                    <p><b>Popularity - </b>{movie?.popularity}</p>
                    <p><b>Budget: </b>{movie?.budget}</p>
                    <p><b>Release date: </b>{movie?.release_date}</p>
                    <p><b>Rating - </b>{movie?.vote_average}/10</p>
                    <p className={'overview-text'}><b>Short overview: </b>{movie?.overview}</p>
                </div>
            </div>
            <button>Back</button>
        </div>
    );
};

export {
    MovieInfo
};