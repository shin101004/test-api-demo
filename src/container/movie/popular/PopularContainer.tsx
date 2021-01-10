import React, { useState } from 'react';
import { formApi } from 'api';
import FormPresenter from 'presenter/FormPresenter';
import { MovieData } from 'contexts/Contexts';

const PopularContainer = () => {
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
      <FormPresenter title={MovieData[1].title}
                    url={MovieData[1].url}
                    onClick={handleOnClick}
                    loading={isLoading}
                    result={result} />
    )
}

export default PopularContainer;