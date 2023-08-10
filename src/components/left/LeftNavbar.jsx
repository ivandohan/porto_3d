import React from 'react'
import { styled } from 'styled-components';
import {FaBars} from 'react-icons/fa6';

const Navbar = styled.div`
    background-color: #110829;
    padding: 10px;
    display: flex;
    justify-content: space-between;
`;

const Title = styled.div`
    h2 {
        color: white;
        font-weight: 500;
        font-size: 20px;
    }
`;

const MenuButton = styled.div`
    color: white;
    font-size: 20px;
    cursor: pointer;
`;

const LeftNavbar = () => {
    return (
        <Navbar>
            <Title>
                <h2>D. Oh4nn_</h2>
            </Title>
            <MenuButton>
                <FaBars />
            </MenuButton>
        </Navbar>
    );
}

export default LeftNavbar