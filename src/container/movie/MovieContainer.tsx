import Header from "../../components/Header";
import NowPlayContainer from "./nowplay/NowPlayContainer";
import PopularContaner from "./popular/PopularContainer";
import UpcomingContainer from "./upcoming/UpcomingContainer";

const MovieContainer=()=>{
    return (
        <>
            <Header subject="Movie"/>
            <NowPlayContainer/>
			<PopularContaner />
			<UpcomingContainer />
        </>
    )
}

export default MovieContainer;