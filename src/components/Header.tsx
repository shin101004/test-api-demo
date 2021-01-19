import React from 'react';
import styled from "styled-components";
import Helmet from 'react-helmet';
import {TSubject} from "types/formtypes"
import TvNav from "./containers/TvNav";

const Header =({subject}:TSubject)=>{
  return (
    <>
      <Helmet>
      <title>API | {subject}</title>
      </Helmet>
      <WhiteSpace/>
      <Subject>
        {subject}
      </Subject>
      {subject==='Movie' ? <div> </div>: <TvNav/>}

    </>
  )
}

const WhiteSpace = styled.div`
  width : 300px;
  height : 50px;
`;

const Subject = styled.h1`
  font-size : 32px;
  font-weight : 400;
  width : calc(100% - 300px);
  display : block;
  height : 50px;
  color : black;
  padding : 10px;
`;

export default Header;