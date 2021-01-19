import React from "react";
import styled from 'styled-components';

interface IArea {
  result : string;
}

const ResultArea = ({result}:IArea) => {
  return (
    <Container>
      <pre>
        <code>{<>{result}</> }</code>
      </pre>
    </Container>
  )
}

const Container = styled.div`
  border : 1px solid black;
  overflow-y : auto;
  padding : 5px;
  width : 700px;
  height : 500px;
`;

export default ResultArea;