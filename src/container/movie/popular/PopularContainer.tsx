import React, { useState } from 'react';
import { formApi } from 'api';
import { MovieData } from 'modules/contexts/Contexts';

const PopularContainer = () => {
  const [result, setResult] = useState<any|any[]>(null);
  const [url, setUrl] = useState<string>('https://api.themoviedb.org/3/movie/popular?api_key=9a735f45eff9846b9afeee748729ddaf');
  const [link, setLink] = useState<ILink | any>({
    language : '',
    page : '',
    region:'',
  });
  const baseUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=9a735f45eff9846b9afeee748729ddaf';


  const handleOnClick= async(addr:string)=>{
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

  }
    
    return (
      <div></div>
    )
}

interface ILink {
  language : string;
  page : string;
}

export default PopularContainer;