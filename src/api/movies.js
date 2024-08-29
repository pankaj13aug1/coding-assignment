import { ENDPOINT, API_KEY } from '../constants.js';

const urlDiscoverMovies = ENDPOINT+'/discover/movie?api_key='+API_KEY+'&sort_by=vote_count.desc';
const urlSearchMovies = ENDPOINT+'/search/movie?api_key='+API_KEY

const getMovieById = async (id) => {
    const url = `${ENDPOINT}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`

    const response = await fetch(url)

    const data = await response.json();
    return data;
  }

const getMoviesBySearchTerm = async (searchTerm, page, signal) => {
    const url = `${urlSearchMovies}&query=${searchTerm}&page=${page}`

    const response = await fetch(url, {
        signal
    });

    const data = await response.json();
    return data;
}

const getMoviesByDiscover = async (page, signal) => {
    const url = `${urlDiscoverMovies}&page=${page}`

    const response = await fetch(url, {
            signal
        }
    );

    const data = await response.json();
    return data;
}

export { getMovieById, getMoviesBySearchTerm, getMoviesByDiscover}