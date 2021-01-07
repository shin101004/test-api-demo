import React from 'react';
import styled from "styled-components";
import FormPresenter from "../presenter/FormPresenter";
import {moviesApi} from "../api"

type TSubject = {
  subject : string;
}


const Form=({subject}:TSubject)=>{
    return (
       <FormPresenter/>
    )
}

export default Form;