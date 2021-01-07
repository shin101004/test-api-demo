import React, { useState } from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const handleClick=(e:any)=>{

}

const PageList = ()=>{
    const [open, setOpen]=useState<boolean>(false);
    return (
        <Container>
            <UList>
                <Link to="/">
                    <List>Movie</List>
                </Link>
                <Link to="/">
                    <List>TV</List>
                </Link>
                <Link to="/">
                    <List>Search</List>
                </Link>
            </UList>
        </Container>
    );
}

const Container = styled.div`
    width : 100%;
    height : 880px;
`;

const UList = styled.ul`
    padding : 10px 30px;
    list-style : square;
    a{
        border : none;
        margin : 0;
        padding : 0;
        height : auto;
    }
`;

const List = styled.li`
    margin-bottom : 15px;
    color : rgba(255,255,255);
    font-weight : 400;
    cursor : pointer;
`;

export default PageList;