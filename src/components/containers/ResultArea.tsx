import React from "react";
import styled from 'styled-components';

interface IArea {
  loading : boolean;
  result : string;
}

const ResultArea = ({loading, result}:IArea) => {
  return (
    <Container>
      <pre>
        <code>{!loading && <>{result}</> }</code>
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