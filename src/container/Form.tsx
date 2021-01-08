import React, { useState } from 'react';
import FormPresenter from "../presenter/FormPresenter";
import Header from "../components/Header";
import axios from "axios";
// import {IApiForm} from "../types/formtypes";
import {MovieData} from "../contexts/MovieContexts";
import {TSubject} from "../types/formtypes";
import {formApi} from "../api";

const Form=({subject}:TSubject)=>{
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
      <>
      <Header subject={subject} />
      {subject==='Movie' ? 
        MovieData.map(data=>(
        <FormPresenter key={data.url} 
                       title={data.title} 
                       url={data.url} 
                       loading={isLoading}
                       result={result}
                       onClick={handleOnClick}
                       name={name}
        />
      )) :
        <div>Not Found</div>
    }
      </>
    )
}

export default Form;