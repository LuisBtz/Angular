import React from 'react';
import styled from 'styled-components';

const TextHero = ({description}) => {
    return(
        <TextHeroContainer>
            <h2>{description}</h2>
        </TextHeroContainer>
    )
}

const TextHeroContainer = styled.section`
    background-color: var(--gray);
    color: var(--white);
    padding-top: 50px;
    padding-bottom: 50px;
    h2 {
        display: block;
        max-width: var(--container);
        width: 100%;
        margin: 0 auto;
        padding: 20px;
    }
`

export default TextHero