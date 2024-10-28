const baseurl: string = "https://api.themoviedb.org/3"
const Imageurl: string = "https://image.tmdb.org/t/p/original"
const API_KEY: string = import.meta.env.VITE_TMDB_API_KEY

interface endpointsType {
    popular: string,
    topRated: string,
    trending: string,
    comedy: string,
    upcoming: string
}

const endpoints: endpointsType = {
    popular: `${baseurl}/movie/popular?api_key=${API_KEY}`,
    topRated: `${baseurl}/movie/top_rated?api_key=${API_KEY}`,
    trending: `${baseurl}/movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
    comedy: `${baseurl}/search/movie?api_key=${API_KEY}&language=en-US&query=comedy&page=1&include_adult=false`,
    upcoming: `${baseurl}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
}

export { endpoints, Imageurl }