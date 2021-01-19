import React, { useState } from 'react';
import { formApi } from 'api';
// Component
import Whitespace from 'components/containers/Whitespace';
import Container from 'components/containers/Container';
import Title from 'components/containers/Title';
import Button from 'components/containers/Button';
import Url from 'components/containers/Url';
import ResultArea from 'components/containers/ResultArea';
import QuerystringList from 'components/containers/QuerystringList';
import QueryElement from 'components/containers/QueryElement';
import ILink from 'types/movie/interface';

const Popular = () => {

  const [result, setResult] = useState<any|any[]>(null);
  const [url, setUrl] = useState<string>('https://api.themoviedb.org/3/movie/popular?api_key=9a735f45eff9846b9afeee748729ddaf');
  const [link, setLink] = useState<ILink | any>({
    language : '',
    page : '',
    region : ''
  });
  const baseUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=9a735f45eff9846b9afeee748729ddaf';
  const queryArray = ['language', 'page','region'];

  const handleOnClick = () => {

    let addUrl = baseUrl;

    if(link.language!=='') addUrl = addUrl + `&language=${link.language}`;
    if(link.page!=='') addUrl = addUrl + `&page=${link.page}`;
    if(link.region!=='') addUrl = addUrl + `&page=${link.region}`;

    setUrl(addUrl);
    
    formApi(addUrl)
    .then(res => {
      setResult(JSON.stringify(res.data.results,null,4));
    });
  }

  const onChange = (e:any) => {

    const {name, value} = e.target;
    
    setLink({
      ...link,
      [name] : value
    });
  }

    return (
      <>
        <Whitespace />
        <Container>
          <Title title='Popular'/>
          <Button onClick={handleOnClick} />
          <Url url={url} />
          <QuerystringList>
            {queryArray.map(data => 
              <QueryElement data={data} 
                            onChange={onChange}
              />
            )}
          </QuerystringList>
          <ResultArea result={result} />
        </Container>
      </>
    )
}

export default Popular;