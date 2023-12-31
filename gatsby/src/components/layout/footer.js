import React from 'react';
import styled from 'styled-components';
import Newsletter from './newsletter';
import { Link, graphql, useStaticQuery } from "gatsby";


const Footer = () => {

    const data = useStaticQuery(graphql`
    query {
        sanityGlobalPage {
            copyright
            tagline
            angularIcon {
                alt
                asset {
                    url
                }
            }
            socialMediaLinks {
                _key
                name
                url
            }
        }
    }

`);

    return (
        <FooterContainer>
            <div className='container'>
                <div className='iz'>
                    <Newsletter />
                    <div className='logos'>
                        <div className='icon'>
                            <img src={data.sanityGlobalPage.angularIcon.asset.url} alt={data.sanityGlobalPage.angularIcon.alt} />
                        </div>
                        <div className='text'>
                            <div className='top'>
                                <p>{data.sanityGlobalPage.copyright}</p>
                                <p className='dark'>{data.sanityGlobalPage.tagline}</p>
                            </div>
                            <div className='bottom'>
                                <a className='dark small' href='https://nevadaprojects.com/' target='_blank' rel="noreferrer">Design & Developed By Nevada Projects </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='de'>
                    <div className='le'>
                        <ul>
                            <li className='redLink'><Link to="/work" >Work</Link></li>
                            <li className='pinkLink'><Link to="/insights" >Insights</Link></li>
                            <li className='greenLink'><Link to="/about" >About</Link></li>
                        </ul>
                    </div>
                    <div className='ri'>
                        <ul className='items'>
                            {data.sanityGlobalPage.socialMediaLinks.map((item) => {                    
                                    
                                return (
                                    <li 
                                        key={item._key} 
                                        className='link'
                                    >
                                        <a href={item.url}>{item.name}</a>
                                    </li> 
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    background-color: #3A4044;
    .container {
        max-width: var(--container);
        margin: 0 auto;
        padding: 50px 20px 100px;
        color: var(--white);
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        @media (max-width: 750px) {
            padding-bottom: 200px;
        }
        .iz {
            grid-column: 1/3;
            padding-right: 30px;
            @media (max-width: 800px) {
                grid-column: 1/6;
            }
            .logos {
                display: grid;
                grid-gap: 10px;
                grid-template-columns: repeat(2, 1fr);
                .text {
                    padding-left: 10px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .dark {
                        color: #A5ACB7;
                    }
                    .small {
                        font-size: 0.6rem;
                    }
                }
            }
        }
        .de {
            grid-column: 3/6;
            display: flex;
            @media (max-width: 800px) {
                margin-top: 50px;
                grid-column: 1/6;
            }
            @media (max-width: 500px) {
                flex-direction: column;
            }
            .le {
                margin-right: 50px;
                ul {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 100%;
                    li {
                        a {
                            font-family: var(--light);
                            font-size: 4rem;
                            @media (max-width: 1045px) {
                                font-size: 3rem;
                            }
                        }
                    }
                }
            }
            .ri {
                @media (max-width: 500px) {
                        margin-top: 50px;
                    }
                ul {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 100%;
                    
                    li {
                        a {
                            font-family: var(--light);
                            font-size: 4rem;
                            @media (max-width: 1045px) {
                                font-size: 3rem;
                            }
                        }
                    }
                }
            }
        }
    }
`

export default Footer