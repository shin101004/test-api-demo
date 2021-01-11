import { TvData } from 'modules/contexts/Contexts';
import React, { useState } from 'react';
import { formApi } from 'api';
import FormPresenter from 'presenter/FormPresenter';

const AiringContainer = () => {
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
      <FormPresenter title={TvData[2].title}
                    url={TvData[2].url}
                    onClick={handleOnClick}
                    loading={isLoading}
                    result={result} />
    )
}

export default AiringContainer;