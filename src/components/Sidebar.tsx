import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageList from "./PageList";

const Sidebar=()=>{
    return (
        <Container>
            <Aside/>
            <Wrapper>
                <Link to="/">
                    <Title>API TEMPLATE</Title>
                </Link>
                <PageList/>
                <Footer>I <Red>♥️</Red> Tangoo</Footer>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    width : 300px;
    height : 100vh;
    background-color : rgba(28,28,30);
    display : flex;
    flex-wrap : wrap;
    position : fixed;
`;

const Aside = styled.div`
    width : 10%;
    height : 100%;
    background-color : black;
`;

const Wrapper = styled.div`
    width : 90%;
    height : 100%;
    position: relative;
    &>a {
        width : 100%;
        height : 40px;
        border-bottom : 1px solid #555;
        display : block;
    }
`;

const Title = styled.span`
    color : #10e8bb;
    font-size : 20px;
    font-weight : 500;
    text-align : left;
    display : inline-block;
    padding : 10px 10px;
`;

const Footer = styled.div`
    width : 100%;
    height : 40px;
    font-size : 20px;
    padding : 10px 0;
    color : white;
    text-align : center;
    position: absolute;
    top : 90vh;
`;

const Red = styled.span`
    color : red !important;
`;

export default Sidebar;