import NavList from 'components/containers/NavList';
import NavUlist from 'components/containers/NavUlist';
import Header from 'components/Header';
import React from 'react';
import Airing from "./airing/Airing";
import Popular from "./popular/Popular";
import Toprated from "./toprated/Toprated"

const Tv = () => {
  const navArray = ['Now Playing', 'Popular', 'Airing'];
  const handleClick = (x:number, y:number) => {
    window.scrollTo(x, y);
  }
  return (
    <>
      <Header subject="TV"/>
      <NavUlist subject="TV">
        {navArray.map((data, index)=> (
          <NavList onClick={()=>handleClick(100, index*600)}
                  data={data}
          />
        ))}
      </NavUlist>
      <Toprated />
      <Popular />
      <Airing />
    </>
    )
}

export default Tv;