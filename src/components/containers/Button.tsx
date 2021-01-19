import React from "react";
import styled from 'styled-components';

interface IButton {
  onClick : ()=>void;
}

const Button = ({onClick}:IButton) => {
  return (
    <Btn onClick={onClick}>Send</Btn>
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