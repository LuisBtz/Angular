import React from 'react';
import styled from 'styled-components';

const AboutHero = ({about}) => {
    return(
        <AboutHeroContainer >
            <div className='container'>
                <h1 data-aos="fade-down" data-aos-delay="500" data-aos-duration="500">{about.mainText}</h1>
                <div className='description' data-aos="fade-down" data-aos-delay="500" data-aos-duration="500">
                    <h2>{about.description}</h2>
                </div>
            </div>
        </AboutHeroContainer>
    )
}

const AboutHeroContainer = styled.section`
    .container {
        max-width: var(--container);
        width: 100%;
        margin: 0 auto;

        h1 {
            font-size: 8vw;
            text-align: center;
            display: inline-block;
            margin: 100px auto;
            text-align: center;
            @media (max-width: 750px) {
                font-size: 4rem;
                margin: 40px auto;
            }
        }
        .description {
            padding: 20px;
            h2 {
                font-size: 2.3rem;
                font-weight: lighter;
                font-family: var(--regular);
                border-bottom: solid 1px var(--white);
                padding-bottom: 50px;
            }
        }
    }
`

export default AboutHero