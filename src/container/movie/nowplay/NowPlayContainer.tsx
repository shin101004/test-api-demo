import React, { useState } from 'react';
import { formApi } from 'api';
import FormPresenter from 'presenter/FormPresenter';
import {MovieData} from 'modules/contexts/Contexts';

const NowPlayContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any|any[]>(null);

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
      <FormPresenter title={MovieData[0].title}
                    url={MovieData[0].url}
                    onClick={handleOnClick}
                    loading={isLoading}
                    result={result} />
    )
}

export default NowPlayContainer;