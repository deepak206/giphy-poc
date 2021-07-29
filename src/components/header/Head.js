import React from 'react';

export default function Head(props) {
    return (
        <div className="topnav">
            <div className="title">GIPHY POC</div>
            <div><a className="active" href="/">Trending</a></div>
            <div className="theme-toggle">
                <div className="switch-label">Toggle Template </div>
                <label className="switch">
                    <input type="checkbox" onClick={props.themeHandler} />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>

    );
}

