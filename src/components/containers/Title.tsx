import React from "react";
import styled from 'styled-components';

interface ITitle {
  title : string;
}

const Title = ({title}:ITitle) => {
  return (
    <Container>
      {title}
    </Container>
  );
}

const Container = styled.h2`
  width : 640px;
  display : inline-block;
  font-size : 20px;
`;

export default Title;