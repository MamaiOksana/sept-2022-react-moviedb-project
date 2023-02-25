import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

import {movieActions} from "../../redux";
import '../MovieList/MovieList.css'
import ReactPaginate from "react-paginate";

const PAGE_DIVIDER = 74.4;

const MoviesList = ({darkmode}) => {
    const [page, setPage] = useState(1)
    const [movieGenre, setMovieGenre] = useState('')
    const [movieKeyword, setMovieKeyword] = useState('')
    const [movieKeywordId, setMovieKeywordId] = useState('')

    useEffect(() => {
        setPage(1)
    }, [movieKeywordId, movieGenre])

    const {movies, genres, keywords, total_pages} = useSelector(state => state.movies)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getAllMovies({page, with_genres: movieGenre, with_keywords: movieKeywordId }))
    }, [page, movieGenre, movieKeywordId])

    useEffect(()=>{
        dispatch(movieActions.getAllGenres())
    }, [dispatch])

    useEffect(()=>{
        dispatch(movieActions.getAllKeywords({query: movieKeyword}))
    }, [movieKeyword])

    return (
        <div className={darkmode ? 'mainContainer-dark' : 'mainContainer'}>
            <div className={'filters'} >
            <select name="genres" onChange={(e) =>setMovieGenre(e.target.value) } >
                <option value=''>Genre</option>
                {genres?.map(genre => (
                    <option key={genre.id} value={genre.id}>{genre.name}</option>
                ))}
            </select>
                <input placeholder={'Search keywords'} value={movieKeyword} onChange={(e) => setMovieKeyword(e.target.value)} />
                <select name="keywords" onChange={(e) =>setMovieKeywordId(e.target.value) } >
                    <option value=''>Keyword</option>
                    {keywords?.map(keyword => (
                        <option key={keyword.id} value={keyword.id}>{keyword.name}</option>
                    ))}
                </select>
            </div>
            <h5 className='moviesContainer' >
                {movies?.map(mov => <MoviesListCard key={mov?.id} mov={mov} />)}
            </h5>

            <div className={'pagination-wrapper'}>
                    <ReactPaginate
                        onPageChange={({selected})=>{
                            setPage(selected + 1)
                        }}
                        pageCount={Math.floor(total_pages / PAGE_DIVIDER)}
                        previousLabel={'<'}
                        nextLabel={'>'}
                        className='pagination'
                        pageClassName={'pagination-page'}
                        breakClassName={'pagination-page'}
                        activeClassName={'pagination-active-page'}
                        disabledClassName={'pagination-page-disabled'}
                    />
            </div>
        </div>

    );
};

export {
    MoviesList
};