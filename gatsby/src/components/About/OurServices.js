import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const OurServices = ({about}) => {
    return(
        <OurServicesContainer >
            <div className='container'>
                <div className='top' data-aos="fade-down" data-aos-delay="500" data-aos-duration="500">
                    <h2>Our Services</h2>
                    <Link to='/work'><span>></span>See All Work</Link>
                </div>
                <ul className='services'>
                    {about.services.map((service) => {
                        return (
                            <li className={`${service.empty} item`} key={service._kay} data-aos="fade-down" data-aos-delay="500" data-aos-duration="500">
                                <div className='esquinas'>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </li>
                        )
                    })}
                </ul>
                <div className='texto' data-aos="fade-down" data-aos-delay="500" data-aos-duration="500">
                    <h2>{about.ourServicesDescription}</h2>
                </div>
            </div>
        </OurServicesContainer>
    )
}

const OurServicesContainer = styled.section`
    .container {
        width: 100%;
        max-width: var(--container);
        margin: 20px auto 30px;
        padding: 20px;
        .texto {
            margin-top: 100px;
            border-bottom: solid 1px var(--white);
            padding-bottom: 30px;
            h2 {
                font-family: var(--regular);
                font-size: 2.2rem;
                @media (max-width: 650px){
                    font-size: 1.8rem;
                }
            }
        }
        .top {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            padding-bottom: 20px;
            border-bottom: solid 1px var(--white);
            @media (max-width: 550px){
                flex-direction: column;
                align-items: flex-start;
                a {
                    margin-top: 20px;
                }
            }
            span {
                margin-right: 30px;
            }
            a {
                background-color: var(--softPink);
                display: inline-block;
                color: var(--black);

            }
        }
        ul.services {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 40px;
            margin-top: 50px;
            @media (max-width: 850px){
                grid-template-columns: repeat(2, 1fr);
            }
            @media (max-width: 550px){
                grid-template-columns: repeat(1, 1fr);
            }
            li {
                padding: 20px;
                position: relative;
                h3 {
                    font-family: var(--regular);
                    font-size: 1.5rem;
                    margin-bottom: 100px;
                    @media (max-width: 940px){
                        font-size: 1rem;
                    }
                }
                .esquinas {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                    div {
                        position: absolute;
                        width: 10px;
                        height: 10px;
                        background-color: none;
                        z-index: -1;
                        &:nth-child(1) {
                            top: -5px;
                            left: -5px;
                            border-top: solid 1px var(--white);
                            border-left: solid 1px var(--white);
                        }
                        &:nth-child(2) {
                            top: -5px;
                            right: -5px;
                            border-top: solid 1px var(--white);
                            border-right: solid 1px var(--white);
                        }
                        &:nth-child(3) {
                            bottom: -5px;
                            left: -5px;
                            border-bottom: solid 1px var(--white);
                            border-left: solid 1px var(--white);
                        }
                        &:nth-child(4) {
                            bottom: -5px;
                            right: -5px;
                            border-bottom: solid 1px var(--white);
                            border-right: solid 1px var(--white);
                        }
                    }
                }
            }
            
        }
    }
`

export default OurServices