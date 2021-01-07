import React from 'react';
import FormPresenter from "../presenter/FormPresenter";
import Header from "../components/Header"
// import {IApiForm} from "../types/formtypes";
import {MovieData} from "../contexts/MovieContexts";
import {TSubject} from "../types/formtypes"

const Form=({subject}:TSubject)=>{
    return (
      <>
      <Header subject={subject} />
       <FormPresenter 
        title={MovieData[0].title} 
        url={MovieData[0].url} />
        <FormPresenter
        title={MovieData[1].title} 
        url={MovieData[1].url} />
        <FormPresenter
        title={MovieData[2].title} 
        url={MovieData[2].url} />
      </>
    )
}

export default Form;