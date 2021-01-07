import axios from "axios";

const api = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    params : {
        api_key : "9a735f45eff9846b9afeee748729ddaf",
        language : 'en-US'
    }
});

export const moviesApi = {
		nowPlaying : ()=> api.get("movie/now_playing"),
		upcoming : ()=> api.get("movie/upcoming"),
		popular : ()=> api.get("movie/popular")
}