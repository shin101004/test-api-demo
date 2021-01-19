import styled from 'styled-components';

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
            <UList>
                <span>M o v i e</span>
                {navArray.map((data, index) => (
                    <List onClick = {()=> handleClick(100, index * 600)}>{data}</List>
                ))}
            </UList>
            <NowPlaying />
			      <Popular />
			      <Upcoming />
        </>
    )
}

// 리팩토링 해야함
const UList = styled.ul`
  list-style : none;
  padding : 15px;
  margin : 0 10px;
  display : inline-block;
  position : fixed;
  top : 50px;
  left : 1100px;
  border : 1px solid black;
  border-radius : 16px;
  text-align : center;
`;

const List = styled.li<{onClick : () => void}>`
  margin : 10px 0px;
  font-size : 16px;
  font-weight : 400;
  width : auto;
  height : 15px;
  background-color : black;
  padding : 15px;
  border-radius : 16px;
  display : flex;
  align-items : center;
  justify-content : center;
  letter-spacing : 2px;
  cursor : pointer;
  color : white;
  &:hover {
    color : rgba(100,200,255,0.7);
  }
`;

export default Movie;