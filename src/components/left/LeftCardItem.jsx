import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    flex: 1;
    height: 200px;
    display: flex;
    background-color: #110829;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LeftCardItem = ({ id }) => {
    return (
        <Container>
            Card {id}
        </Container>
    )
}

export default LeftCardItem