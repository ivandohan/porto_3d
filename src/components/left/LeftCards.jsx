import React from 'react'
import { styled } from 'styled-components';
import LeftCardItem from './LeftCardItem';

const Container = styled.div`
    display: flex;
    gap: 20px;
`;

const LeftCards = () => {
    return (
        <Container>
            <LeftCardItem id={"1"} />
            <LeftCardItem id={"2"} />
            <LeftCardItem id={"3"} />
        </Container>
    );
}

export default LeftCards