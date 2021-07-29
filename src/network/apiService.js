import axios from 'axios';

export const fetchTrending = (offset) => {
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=eql2KTXiveTBvzwOeI0nfLnPrccYwBQ2&limit=25&rating=g&offset=${offset}`
    var config = {
        method: 'get',
        url: url,
        headers: {
            Accept: 'applicaition/xhtml'
        }
    };

    axios(config)
        .then(function (response) {
            return  response;
        })
        .catch(function (error) {
            return [];
        });
};