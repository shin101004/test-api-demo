import React from 'react';
import Helmet from "react-helmet";
import styled from 'styled-components';
import {IApiForm} from "../types/formtypes";

const onSend=()=>{
  alert("Clicked");
}

const FormPresenter=({title, url}:IApiForm)=>{
    return (
      <>
        <WhiteSpace/>
        <Container>
              <Title>{title}</Title>
              <Btn onClick={onSend}>Send</Btn>
              {true &&  <Error>Status : Error</Error>}
              <Url>{url}</Url>
              {true && <ResultArea>123</ResultArea>}
        </Container>
      </>
    )
}

const WhiteSpace = styled.div`
  width : 300px;
  height : 600px;
`;

const Container = styled.div`
  width : calc(100% - 300px);
  height : 600px;
  margin : 10px 0;
  padding : 10px;
`;

const Title = styled.h2`
  width : calc(50% - 60px);
  display : inline-block;
  font-size : 20px;
`;

const Btn = styled.button`
  width : 60px;
  height : 30px;
  font-size : 14px;
  font-weight : 400;
  background-color : yellowgreen;
  border : none;
  border-radius : 16px;
  &:hover {
    color : white;
  }
`;

const Url = styled.div`
  width : 50%;
  height : 50px;
  font-size : 14px;
  background-color : #eee;
  margin : 10px 0;
  padding : 7px 5px;
  color : #888;
  overflow-x : auto;
  white-space : nowrap;
`;

const Error = styled.div`
  
`;


const ResultArea = styled.div`
  border : 1px solid black;
  overflow-y : auto;
  padding : 5px;
  width : 50%;
`;

export default FormPresenter;