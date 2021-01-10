import { TvData } from 'contexts/Contexts';
import React, { useState } from 'react';
import { formApi } from 'api';
import FormPresenter from 'presenter/FormPresenter';

const PopularContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any|any[]>(null);

  const handleOnClick= async(addr:string)=>{
    setIsLoading(true);
    // console.log(addr);
    formApi(addr)
    .then(res => {
      setIsLoading(false);
      setResult(JSON.stringify(res.data.results,null,4));
      // console.log(res.data.results);
    });
  }
    
    return (
      <FormPresenter title={TvData[1].title}
                    url={TvData[1].url}
                    onClick={handleOnClick}
                    loading={isLoading}
                    result={result} />
    )
}

export default PopularContainer;