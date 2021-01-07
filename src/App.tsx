import React from 'react';
import { Router } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";
import Routes from "./components/Routes";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <>
      <Routes/>
      <GlobalStyle/>
    </>
  );
}

const Container = styled.div`
  display : flex;
  flex-wrap: wrap;
`;



export default App;
