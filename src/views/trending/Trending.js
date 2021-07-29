import React, { useContext, useEffect, useState, useCallback, useRef } from 'react'
import { GiphyContext } from '../../views/giphy-wrapper/GiphyContext';
import { useDebounce } from "../../hooks/useDebounce";
import './Trending.css';
import loaderImg from '../../asset/image/loader.gif';
import ImageCard from '../../components/image-card/ImageCard';

export default function Head() {
    const {
        isLoading,
        trendingGiphy,
        updatePageCount,
        setSearchValue,
        searchValue,
        updateSearchPageCount
    } = useContext(GiphyContext);

    const loader = useRef(null);

    const debouceCall = useDebounce(searchValue, 1000);

    useEffect(() => {
        if (!isLoading)
            updateSearchPageCount()
    }, [debouceCall])

    const onChangeHandler = (event) => {
        const { value } = event.target;

        setSearchValue(value);
    }


    const handleObserver = useCallback((entries) => {
        if (!isLoading)
            updatePageCount();

    }, []);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "0px",
            threshold: 0
        };

        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    }, [handleObserver]);

    return (
        <>
            <div className="search-wrapper">
                <input className="search" placeholder="Search" type="text" onChange={onChangeHandler} />
            </div>
            {!!searchValue && <div className="search-value-wrapper"><b>Search Result For :</b> {searchValue}</div>}
            <div className="trending-wrapper">
                {!!trendingGiphy.length && trendingGiphy.map((gif, key) => <ImageCard gif={gif} index={key} />)}
                <div ref={loader} />
                {isLoading &&
                    <div className="loader"> <img src={loaderImg} /></div>
                }
            </div>
        </>
    )

}

