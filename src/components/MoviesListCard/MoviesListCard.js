import React from 'react';
import {useNavigate} from "react-router-dom";
import ReactStars from "react-rating-stars-component/dist/react-stars";

import {urls} from "../../configs";
import {useSelector} from "react-redux";
import '../MoviesListCard/MoviesListCard.css'
import {Paths} from "../../routes/routes";

const MoviesListCard = ({mov}) => {
    const navigate = useNavigate()

    const {genres} = useSelector(state => state.movies)

    return (
        <div className='movie-card' onClick={() => navigate("/" + mov?.id)} >
            <div className={'box-badge'}>
                {mov?.genre_ids?.map(genre_id => (
                    <span key={genre_id} className='badge' >{genres.find(genre => genre?.id === genre_id)?.name}</span>
                ))}
            </div>
            {mov?.poster_path ?  <img src={`${urls.poster}${mov?.poster_path}`} /> : null}
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
