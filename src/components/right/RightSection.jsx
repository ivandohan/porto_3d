import React from 'react'
import { styled } from 'styled-components';

const Section = styled.section`
    height: 100vh;
    background-color: #7450d0;
    flex: 2;
    padding: 20px;
`;

const RightSection = () => {
    return (
        <Section>
            Right Hulk
        </Section>
    );
}

export default RightSection