import React, {useEffect, useState} from 'react';

import {Header} from "../components/Header/Header";
import {MoviesList} from "../components";

const MoviesPage = () => {
    const [darkmode, setDarkmode] = useState(localStorage.getItem('darkmode') || false);
    useEffect(()=>{
        localStorage.setItem('darkmode', darkmode)
    },[darkmode])

    return (
        <div>
            <Header darkmode={darkmode} setDarkmode={setDarkmode} />
            <MoviesList darkmode={darkmode} />
        </div>
    );
};

export {
    MoviesPage
};