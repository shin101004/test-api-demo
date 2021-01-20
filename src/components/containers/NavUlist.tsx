import styled from 'styled-components';

const NavUlist = ({subject ,children}:INavUlist) => {
  return (
    <Ulist>
      <span>{subject}</span>
      {children}
    </Ulist>
  )
}

interface INavUlist {
  subject : string;
  children : React.ReactNode;
}

const Ulist = styled.ul`
  list-style : none;
  padding : 15px;
  margin : 0 10px;
  display : inline-block;
  position : fixed;
  top : 50px;
  left : 1100px;
  border : 1px solid black;
  border-radius : 16px;
  text-align : center;
`;



export default NavUlist;