import React from 'react';

import '../Header/Header.css'

const Header = ({darkmode, setDarkmode}) => {

    return (
        <div className={darkmode ? 'header-dark' : 'header'}>
            <div className={'click-box'}>
               <span>Light</span>
                <label className={'switch'}>
                    <input
                        checked={darkmode}
                        onChange={(event) => setDarkmode(event.target.checked)}
                        type={'checkbox'}
                    />
                    <span className={'slider'}></span>
                </label>
               <span>Dark</span>
            </div>
            <h1>Welcome to the world cinema</h1>
            <div className={'user'}><b>MG</b></div>
        </div>
    );
};

export {
    Header
};