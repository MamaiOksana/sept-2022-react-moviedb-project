import React from 'react';
import {useNavigate} from "react-router-dom";
import {Paths} from "../../App";
import {urls} from "../../configs";
import {useSelector} from "react-redux";
import ReactStars from "react-rating-stars-component/dist/react-stars";

import '../MoviesListCard/MoviesListCard.css'

const MoviesListCard = ({mov}) => {
    const navigate = useNavigate()

    const {genres} = useSelector(state => state.movies)

    return (
        <div className='movie-card' onClick={() => navigate(Paths.MOVIES + "/" + mov?.id)} >
            <div className={'box-badge'}>
                {mov?.genre_ids?.map(genre_id => (
                    <span className='badge' >{genres.find(genre => genre?.id === genre_id)?.name}</span>
                ))}
                 {/*<div className='badge' >{genres.find(genre => genre?.id === mov?.genre_ids?.[0])?.name}</div>*/}
            </div>
            <img src={`${urls.poster}${mov?.poster_path}`} />
            <div className='rating' >
                <ReactStars
                    value={mov?.vote_average}
                    count={10}
                    size={18}
                    disabled={true}
                    isHalf={true}
                    edit={false}
                    onChange={null}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                />
            </div>
            <div className='title' >{mov?.original_title}</div>
        </div>
    );
};

export {
    MoviesListCard
};
