import React, { useState, useMemo, useCallback, useEffect } from 'react'
import axios from 'axios';

export const GiphyContext = React.createContext(null);

export function GiphyContextProvider(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [trendingGiphy, setTrendingGiphy] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [searchValue, setSearchValue] = useState('');
    const [searchPageCount, setSearchPageCount] = useState(0);

    const sendQuery = useCallback(async () => {

        try {
            if (!searchValue) {
                const url = `https://api.giphy.com/v1/gifs/trending?api_key=eql2KTXiveTBvzwOeI0nfLnPrccYwBQ2&limit=24&rating=g&offset=${pageCount}`;
                await setIsLoading(true);
                const res = await axios.get(url);
                await setTrendingGiphy((prev) => [...prev, ...res.data.data]);
                setIsLoading(false);
            } else {
                updateSearchPageCount();
            }
        } catch (err) {
        }
    }, [pageCount, searchValue]);

    useEffect(() => {
        sendQuery();
    }, [pageCount]);

    function updatePageCount() {
        setPageCount((prev) => prev + 1)
    }

    const searchQuery = useCallback(async () => {
        try {
            if (searchValue) {
                const url = `https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=eql2KTXiveTBvzwOeI0nfLnPrccYwBQ2&limit=24&rating=g&offset=${searchPageCount}`;
                await setIsLoading(true);
                const res = await axios.get(url);
                await setTrendingGiphy((prev) => [...prev, ...res.data.data]);
                setIsLoading(false);
            }
        } catch (err) {
        }
    }, [searchValue, searchPageCount]);

    useEffect(() => {
        searchQuery();
    }, [searchPageCount]);

    function updateSearchPageCount() {
        if (!searchPageCount) setTrendingGiphy([]);
        if (searchValue) {
            setSearchPageCount((prev) => prev + 1)
        }
    }

    const GiphyValue = useMemo(() => {
        return {
            isLoading, trendingGiphy,
            updatePageCount,
            sendQuery,
            searchValue,
            setSearchValue,
            searchQuery,
            updateSearchPageCount
        }
    }, [isLoading, trendingGiphy, searchValue]);


    return (
        <GiphyContext.Provider value={GiphyValue}>
            {props.children}
        </GiphyContext.Provider>
    );
}