import React from 'react';
import styled from 'styled-components';


const onSend=()=>{
  alert("Clicked");
}

const FormPresenter=()=>{
    return (
      <Wrapper>
        <Subject>Subject</Subject>
        <Container>
            <Title>Title</Title>
            <Btn onClick={onSend}>Send</Btn>
            {true &&  <Error>Status : Error</Error>}
            <Url>www.naver.com</Url>
            {true && <ResultArea>123</ResultArea>}
        </Container>
      </Wrapper>
    )
}

const Wrapper = styled.div`
  width : 70%;
  padding : 15px;
`;

const Subject = styled.h1`
  font-size : 32px;
  font-weight : 400;
  width : 100%;
  display : block;
  height : auto;
`;

const Container = styled.div`
  width : 600px;
  height : 600px;
  margin : 10px 0;
`;

const Title = styled.h2`
  width : 90%;
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

const Url = styled.p`
  width : 100%;
  height : auto;
  font-size : 16px;
  background-color : #eee;
  margin : 10px 0;
  padding : 7px 5px;
  color : #888;
  overflow-x : auto;
  &:hover {
    color : #a2bdeb;
  }
`;

const Error = styled.div`
  
`;


const ResultArea = styled.div`
  border : 1px solid black;
  overflow-y : auto;
  padding : 5px;
`;

export default FormPresenter;