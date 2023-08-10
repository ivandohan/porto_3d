import React from 'react'
import { styled } from 'styled-components';

const Container = styled.div`
    flex: 2;
    background-color: #110829;
    padding: 20px;
`;

const BarButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const BarButton = styled.div`
    background-color: #6a52aa;
    padding: 10px 30px;
    border-radius: 5px;
    border: 1px solid white;
    cursor: pointer;

    span {
        font-size: 15px;
        color: white;
    }
`;

const GreetingsBar = () => {
    return (
        <Container>
            <BarButtonContainer>
                <BarButton>
                    <span>Button 1</span>
                </BarButton>
                <BarButton>
                    <span>Button 2</span>
                </BarButton>
            </BarButtonContainer>
        </Container>
    );
}

export default GreetingsBar