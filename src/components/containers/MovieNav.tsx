import React from 'react';
import styled from 'styled-components';

const MovieNav = () => {
  
  const handleClick = (x:number,y:number) => {
    window.scrollTo(x,y);
  }

  return (
    <UList>
      <span>Navigation</span>
      <List onClick={()=>handleClick(100, 0)}>Now Playing</List>
      <List onClick={()=>handleClick(100,600)}>Popular</List>
      <List onClick={()=>handleClick(100,1200)}>Upcoming</List>
      {/* 리스트를 handleClick(100, 600 * a) 형식으로 변경할 예정 */}
    </UList>
  )
}

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

const List = styled.li`
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

export default MovieNav;