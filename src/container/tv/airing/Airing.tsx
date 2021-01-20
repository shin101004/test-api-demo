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
// Interface
import ILink from 'types/container/interface';

const Airing = () => {

  const [result, setResult] = useState<string|any[]>('');
  const [url, setUrl] = useState<string>('https://api.themoviedb.org/3/tv/airing_today?api_key=9a735f45eff9846b9afeee748729ddaf');
  const [link, setLink] = useState<ILink | any>({
    language : '',
    page : ''
  });
  const baseUrl = 'https://api.themoviedb.org/3/tv/airing_today?api_key=9a735f45eff9846b9afeee748729ddaf';
  const queryArray = ['language', 'page'];
  
  const handleOnClick = () => {

    let addUrl = baseUrl;

    if(link.language!=='') addUrl = addUrl + `&language=${link.language}`;
    if(link.page!=='') addUrl = addUrl + `&page=${link.page}`;

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
          <Title title='Airing'/>
          <Button onClick={handleOnClick} />
          <Url url={url} />
          <QuerystringList>
            {queryArray.map(data => 
              <QueryElement key={data}
                            data={data} 
                            onChange={onChange}
              />
            )}
          </QuerystringList>
          <ResultArea result={result} />
        </Container>
      </>
    )
}

export default Airing;