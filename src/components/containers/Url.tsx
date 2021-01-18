import React from "react";
import styled from 'styled-components';

interface IUrl {
  url : string;
}

const Url = ({url}:IUrl) => {
  return (
    <Container>{url}</Container>
    );
}

const Container = styled.div`
  width : 700px;
  height : 45px;
  font-size : 12px;
  background-color : #eee;
  margin : 10px 0;
  padding : 7px 3px;
  color : #888;
  overflow-x : auto;
  white-space : nowrap;
  display : flex;
  align-items : center;
`;

export default Url;