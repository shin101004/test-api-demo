import React from 'react';
import Helmet from "react-helmet";
import styled from 'styled-components';
import {IForm} from "../types/formtypes";

const FormPresenter=({title, url, onClick, loading, result, name}:IForm) => {
    return (
      <>
        <WhiteSpace/>
        <Container>
              <Title>{title}</Title>
              <Btn onClick={()=>onClick(url)}>Send</Btn>
              <Url><span>{url}</span></Url>
              <ResultArea>
                <pre>
                  <code>{!loading && <>{result}</> }</code>
                </pre>
              </ResultArea>
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
    cursor : pointer;
  &:hover {
    color : white;
  }
`;

const Url = styled.div`
  width : 50%;
  height : 45px;
  font-size : 12px;
  background-color : #eee;
  margin : 10px 0;
  padding : 7px;
  color : #888;
  overflow-x : auto;
  white-space : nowrap;
  display : flex;
  align-items : center;
`;

const Error = styled.div`
  background-color : red;
`;


const ResultArea = styled.div`
  border : 1px solid black;
  overflow-y : auto;
  padding : 5px;
  width : 50%;
  height : 80%;
`;

export default FormPresenter;