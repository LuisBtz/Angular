import React from 'react';
import styled from 'styled-components';
import { Link, graphql, useStaticQuery } from "gatsby";



const Header = ({gray, white}) => {

    const data = useStaticQuery(graphql`
        query {
            sanityGlobalPage {
                logoSVGCode
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



    return(
        <HeaderContainer>
            <Link to='/'  >
                <div
                    data-aos="fade-down" data-aos-delay="0" data-aos-duration="800" 
                    className={gray === true ? 'logo gray' : white === true ? 'logo white' : 'logo'}
                    dangerouslySetInnerHTML={{__html: data.sanityGlobalPage.logoSVGCode}}
                />
            </Link>
            <div className={white ? 'text white' : 'text'}  data-aos="fade-down" data-aos-delay="0" data-aos-duration="800" >
                <div className='iz'>
                    <p>{data.sanityGlobalPage.tagline}</p>
                </div>
                <div className='de'>
                <p>{data.sanityGlobalPage.copyright}</p>
                </div>
            </div>
            <nav>
                <div className='container'>
                    <ul className='pages'>
                        <li>
                            <Link to='/'><img src={data.sanityGlobalPage.angularIcon.asset.url} alt={data.sanityGlobalPage.angularIcon.alt} /></Link>
                        </li>
                        <li className='greenLink'><Link to='/work'>Work</Link></li>
                        <li className='yellowLink'><Link to='/about'>About</Link></li>
                        <li className='blueLink'><Link to='/insights'>Insights</Link></li>
                    </ul>
                    <ul className='social'>
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
                    <ul className='policy'>
                        <li><Link to='/'>Privacy Policy</Link></li>
                        {/* <li>Design & Developed By Nevada Projects </li> */}
                    </ul>
                </div>
            </nav>
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
                font-size: 0.6rem;
            }
            .iz {
                width: 125px;
            }
        }
        .text.white {
            color: var(--white) !important;
        }
    .logo.gray {
        path {
            fill: #A5ACB7 !important;
        }
    }
    .logo.white {
        path {
            fill: #ffffff !important;
        }
    }
    .logo {
        margin-top: 30px;
        svg {
            width: 100%;
            height: auto;
        }
    }
    nav {
        position: fixed;
        z-index: 5;
        bottom: 0px;
        width: 100%;
        left: 0;
        background-color: #3A4044;
        color: var(--white);
        .container {
            width: 100%;
            max-width: var(--container);
            margin: 0 auto;
            display: flex;
            padding: 10px;
            justify-content: space-between;
            @media (max-width: 750px) {
                flex-direction: column;
            }
            ul {
                display: flex;
                @media (max-width: 750px) {
                    margin-top: 10px;
                    margin-bottom: 10px;
                }
                li {
                    margin-right: 20px;
                    img {
                        width: 40px;
                    }
                }
            }
            .policy {
                flex-direction: column;
                li {
                    &:last-child {
                        color: black
                    }
                }
            }
        }
    }
`

export default Header