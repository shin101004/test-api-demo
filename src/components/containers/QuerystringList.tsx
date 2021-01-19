import styled from 'styled-components';

const QuerystringList = styled.ul`
  list-style : none;
  width : 700px;
  border : 1px solid #eee;
  margin : 5px 0;
  li {
    font-size : 12px;
  }
  li:nth-child(1) {
    border-top : 0;
  }
  li>input {
    width : 50%;
    padding : 5px;
    border : none;
  }
  li>input:focus {
    outline : none;
  }
  li>input:nth-child(1) {
    background-color : #fff;
    border-bottom : 1px solid #e3e3e3;
  }
  li>input:nth-child(2) {
    background-color : #e3e3e3;
    border-bottom : 1px solid #fff;
  }
`;

export default QuerystringList;