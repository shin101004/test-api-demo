import React from "react";
import styled from 'styled-components';

interface IButton {
  onClick : (link:string)=>void;
  url : string;
}

const Button = ({onClick, url}:IButton) => {
  return (
    <Btn onClick={()=>onClick(url)}>Send</Btn>
  );
}

const Btn = styled.button`
  width : 60px;
  height : 30px;
  font-size : 14px;
  font-weight : 400;
  background-color : yellowgreen;
  border : none;
  border-radius : 16px;
  cursor: pointer;
  &:hover {
    color : white;
  }
`;

export default Button;