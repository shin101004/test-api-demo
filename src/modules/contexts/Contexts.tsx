// 키값 9a735f45eff9846b9afeee748729ddaf
interface IData {
  title : string;
  url : string;
}

type datalist = IData[];

export const MovieData:datalist = [
  {title : 'Now Playing', url : 'https://api.themoviedb.org/3/movie/now_playing?api_key=9a735f45eff9846b9afeee748729ddaf&language=en-US&page=1'},
  {title : 'Popular', url :'https://api.themoviedb.org/3/movie/popular?api_key=9a735f45eff9846b9afeee748729ddaf&language=en-US&page=1'},
  {title:'Upcoming', url:'https://api.themoviedb.org/3/movie/upcoming?api_key=9a735f45eff9846b9afeee748729ddaf&language=en-US&page=1'}
]

export const TvData = [
  {title:'Top Rated', url:'https://api.themoviedb.org/3/tv/top_rated?api_key=9a735f45eff9846b9afeee748729ddaf&language=en-US&page=1'},
  {title:'Popular', url:'https://api.themoviedb.org/3/tv/popular?api_key=9a735f45eff9846b9afeee748729ddaf&language=en-US&page=1'},
  {title:'Airing Today', url:'https://api.themoviedb.org/3/tv/airing_today?api_key=9a735f45eff9846b9afeee748729ddaf&language=en-US&page=1'},
]
