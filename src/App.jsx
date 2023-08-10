import React from 'react';
import { styled } from "styled-components";
import LeftSection from './components/left/LeftSection';
import RightSection from './components/right/RightSection';

const Container = styled.div`
    height: 100vh;
    color: white;
    background: url("./images/bg.jpeg");
    background-size: cover;
    overflow-y: auto;
    scrollbar-width: none;
    display: flex;
    gap: 20px;
    &::-webkit-scrollbar {
        display: none;
    }
`;

/*
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
*/

const App = () => {

    return (
        <Container>
            <LeftSection />
            <RightSection />
        </Container>
    );
}

export default App;