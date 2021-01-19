import { MovieData } from 'modules/contexts/Contexts';
import React, { useState } from 'react';
import { formApi } from 'api';

const UpcomingContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState<string|any>(null);
  const [result, setResult] = useState<any|any[]>(null);

  const handleOnClick= async(addr:string)=>{
    setIsLoading(true);
    // console.log(addr);
    formApi(addr)
    .then(res => {
      setIsLoading(false);
      setName(addr);
      setResult(JSON.stringify(res.data.results,null,4));
      // console.log(res.data.results);
    });
  }
    
    return (
      <div></div>
    )
}

export default UpcomingContainer;