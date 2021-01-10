import Header from 'components/Header';
import React from 'react';
import AiringContainer from "./airing/AiringContainer"
import PopularContainer from "./popular/PopularContainer";
import TopratedContainer from "./toprated/TopratedContainer"

const TvContainer = () => {

  return (
    <>
      <Header subject="TV"/>
      <TopratedContainer />
      <PopularContainer />
      <AiringContainer />
    </>
    )
}

export default TvContainer;