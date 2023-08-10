import React from 'react'
import { styled } from 'styled-components';
import GreetingsWords from './GreetingsWords';
import GreetingsBar from './GreetingsBar';

const Container = styled.div`
    display: flex;
    gap: 20px;
`;

const LeftGreetings = () => {
    return (
        <Container>
            <GreetingsWords />
            <GreetingsBar />
        </Container>
    );
}

export default LeftGreetings