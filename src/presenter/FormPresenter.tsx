import Button from 'components/containers/Button';
import ResultArea from 'components/containers/ResultArea';
import Url from 'components/containers/Url';
import React from 'react';
import Helmet from "react-helmet";
import styled from 'styled-components';
import Title from '../components/containers/Title';
import {IForm} from "../types/formtypes";

const FormPresenter=({title, url, onClick, loading, result}:IForm) => {
    return (
      <>
        <WhiteSpace/>
        <Container>
              <Title title={title}/>
              <Button onClick={onClick} url={url}/>
              <Url url={url}/>
              <ResultArea loading={loading} result={result} />
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
// const ResultArea = styled.div`
//   border : 1px solid black;
//   overflow-y : auto;
//   padding : 5px;
//   width : 50%;
//   height : 80%;
// `;

export default FormPresenter;