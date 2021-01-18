import React, { useState } from 'react';
import { formApi } from 'api';
import {MovieData} from 'modules/contexts/Contexts';

// Component
import Whitespace from 'components/containers/Whitespace';
import Container from 'components/containers/Container';
import Title from 'components/containers/Title';
import Button from 'components/containers/Button';
import Url from 'components/containers/Url';
import ResultArea from 'components/containers/ResultArea';
import Language from 'components/containers/nowplaying/Language';
import Page from 'components/containers/nowplaying/Page';
import QuerystringList from 'components/containers/QuerystringList';

interface ILink {
  language : string;
  page : string;
}

const NowPlayContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any|any[]>(null);
  const [url, setUrl] = useState<string>('https://api.themoviedb.org/3/movie/now_playing?api_key=9a735f45eff9846b9afeee748729ddaf');
  const [link, setLink] = useState<ILink | any>(null);
  // &language=en-US&page=1

  const handleOnClick= async(addr:string)=>{
    // console.log('click');
    setIsLoading(true);
    formApi(addr)
    .then(res => {
      setIsLoading(false);
      setResult(JSON.stringify(res.data.results,null,4));
    });
  }

    return (
      <>
        <Whitespace />
        <Container>
          <Title title={MovieData[0].title} />
          <Button onClick={()=>handleOnClick} url={url}/>
          <Url url={url} />
          <QuerystringList>
            <Language />
            <Page/>
          </QuerystringList>
          <ResultArea loading={isLoading} result={result} />
        </Container>
      </>
    )
}

export default NowPlayContainer;