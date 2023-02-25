import {urls} from "../configs";
import {apiService} from "./apiService";


const movieService = {
    getAllMovies:(params)=> apiService.get(urls.movies, {params}),
    getMovieById:(id)=> apiService.get(`${urls.movie}/${id}`),
    getAllGenres:()=> apiService.get(urls.genres),
    getAllKeywords:(params)=> apiService.get(urls.keywords, {params})
}


export {
    movieService
}