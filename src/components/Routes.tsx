import React from 'react';
import styled from "styled-components";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Sidebar from "./Sidebar";
import Movie from "../container/movie";

interface RouteProps {
    path : string;
    children : React.ReactChild;
}

const Routes:React.FC=()=>{
    return (
        <Router>
            <Container>
                <Sidebar/>
                    <Switch>
                        <Route path="/" component={Movie} exact />
                    </Switch>
            </Container>
        </Router>
    )
}

const Container = styled.div`
    display : flex;
    flex-wrap : wrap;
`;

export default Routes;