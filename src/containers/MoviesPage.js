import React, {useEffect, useState} from 'react';

import {Header} from "../components";
import {MoviesList} from "../components";
import {useSelector} from "react-redux";

export const DARK_MODE = 'darkmode'

const MoviesPage = () => {
   const [darkmode, setDarkmode] = useState( JSON.parse(localStorage.getItem(DARK_MODE)));

    useEffect(()=>{
        localStorage.setItem(DARK_MODE, JSON.stringify(darkmode))
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