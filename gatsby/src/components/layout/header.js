import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from "gatsby";



const Header = () => {

    const data = useStaticQuery(graphql`
        query {
            sanityGlobalPage {
                logoSVGCode
                copyright
                tagline
            }
        }

    `);



    return(
        <HeaderContainer>
            <div
                className='logo'
                dangerouslySetInnerHTML={{__html: data.sanityGlobalPage.logoSVGCode}}
            />
            <div className='text'>
                <div className='iz'>
                    <p>{data.sanityGlobalPage.tagline}</p>
                </div>
                <div className='de'>
                <p>{data.sanityGlobalPage.copyright}</p>
                </div>
            </div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
        max-width: var(--container);
        margin: 0 auto;
        padding: 50px 20px;
        .text {
            margin-top: -40px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            @media (max-width: 800px) {
                    margin-top: -20px;
                }
            p {
                font-size: 1rem;
                @media (max-width: 800px) {
                    font-size: 0.8rem;
                }
            }
            .iz {
                width: 165px;
            }
        }
    .logo {
        margin-top: 30px;
        svg {
            width: 100%;
            height: auto;
        }
    }
`

export default Header