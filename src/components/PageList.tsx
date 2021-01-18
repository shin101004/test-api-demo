import React, { useState } from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const PageList = ()=>{
    return (
        <Container>
            <UList>
                <Link to="/">
                    <List>Movie</List>
                </Link>
                <Link to="/tv">
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
    height : calc(100% - 10vh);
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
    font-size : 20px;
    cursor : pointer;
    &:hover {
        color : rgba(150,150,150);
    }
`;

export default PageList;