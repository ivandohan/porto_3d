import React from 'react'
import { styled } from 'styled-components';

const Container = styled.div`
    flex: 3;
    background-color: #110834;
`;

const Words = styled.div`
    margin-left: 25px;

    p {
        color: white;
        font-size: 40px;
        font-weight: 600;
    }
`

const GreetingsWords = () => {
    return (
        <Container>
            <Words>
                <p>
                    Hi, Gizemuu! <br />
                    Welcome to My<br />
                    my portofolio website.
                </p>
            </Words>
        </Container>
    );
}

export default GreetingsWords