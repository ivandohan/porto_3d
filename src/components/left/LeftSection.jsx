import React from 'react';
import { styled } from 'styled-components';
import LeftNavbar from './LeftNavbar';
import LeftGreetings from './LeftGreetings';
import LeftCards from './LeftCards';

const Section = styled.section`
    height: 100vh;
    background-color: #351682;
    flex: 5;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const LeftSection = () => {
    return (
        <Section>
            <LeftNavbar />
            <LeftGreetings />
            <LeftCards />
        </Section>
    );
}

export default LeftSection