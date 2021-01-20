import NavList from 'components/containers/NavList';
import NavUlist from 'components/containers/NavUlist';

// components
import Header from "../../components/Header";
import NowPlaying from "./nowplay/NowPlaying";
import Popular from "./popular/Popular";
import Upcoming from "./upcoming/Upcoming";

const Movie = () => {
    const navArray = ['Now Playing', 'Popular', 'Upcoming'];
    const handleClick = (x:number, y:number) => {
        window.scrollTo(x,y);
    }
    return (
        <>
            <Header subject="Movie"/>
            <NavUlist subject="M o v i e">
              {navArray.map((data, index) => (
                <NavList onClick={()=>handleClick(100,index*600)} 
                        data={data}
                />
              ))}    
            </NavUlist>
            <NowPlaying />
			      <Popular />
			      <Upcoming />
        </>
    )
}

export default Movie;