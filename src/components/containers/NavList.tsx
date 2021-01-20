import styled from 'styled-components';

const NavList = ({data, onClick}:INavList) => {
  return (
    <List onClick={onClick}>{data}</List>
  )
}

interface INavList {
  data : string;
  onClick : ()=>void;
}

const List = styled.li`
  margin : 10px 0px;
  font-size : 16px;
  font-weight : 400;
  width : auto;
  height : 15px;
  background-color : black;
  padding : 15px;
  border-radius : 16px;
  display : flex;
  align-items : center;
  justify-content : center;
  letter-spacing : 2px;
  cursor : pointer;
  color : white;
  &:hover {
    color : rgba(100,200,255,0.7);
  } 
`;

export default NavList;