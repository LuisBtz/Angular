import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlockContent from '@sanity/block-content-to-react';


const OurApproach = ({about}) => {
    return(
        <OurApproachContainer>
            <div className='container'>
                <div className='top'>
                    <h2>Our Approach</h2>
                    <Link to='/work'><span>></span>See All Work</Link>
                </div>
                <ul className='approach'>
                    {about.ourApproach.map((approach) => {
                        const iconGetDataImage = getImage(approach.image && approach.image.asset)
                        const iconGetDataImageAlt = approach.image && approach.image.alt
                        
                        return (
                            <li className='item' key={approach._kay}>
                                <div className="image">
                                    <div className='esquinas'>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>

                                    <GatsbyImage
                                        style={{ height: "100%", width: "100%" }}
                                        image={iconGetDataImage}
                                        alt={iconGetDataImageAlt}
                                    />
                                </div>
                                <div className='texto'>
                                    <BlockContent
                                        blocks={approach._rawTitle}
                                    />
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </OurApproachContainer>
    )
}

const OurApproachContainer = styled.section`
    .container {
        width: 100%;
        max-width: var(--container);
        margin: 20px auto 100px;
        padding: 20px;
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
        .approach {
            margin-top: 50px;
            border-bottom: solid 1px var(--white);
            padding-bottom: 50px;
            .item {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                grid-gap: 40px;
                margin-bottom: 40px;
                justify-content: space-between;
                @media (max-width: 650px){
                    grid-template-columns: 1fr;
                }
                &:nth-child(4n - 3) {
                    .texto {
                        grid-column: 1/3;
                        grid-row: 1/2;
                    }
                    .image {
                        grid-column: 3/6;
                        grid-row: 1/2;
                    }
                }
                &:nth-child(4n - 2) {
                    .texto {
                        grid-column: 4/6;
                        grid-row: 1/2;
                    }
                    .image {
                        grid-column: 2/4;
                        grid-row: 1/2;
                    }
                }
                &:nth-child(4n - 1) {
                    .texto {
                        grid-column: 1/3;
                        grid-row: 1/2;
                    }
                    .image {
                        grid-column: 3/6;
                        grid-row: 1/2;
                    }
                }
                &:nth-child(4n) {
                    .texto {
                        grid-column: 3/6;
                        grid-row: 1/2;
                    }
                    .image {
                        grid-column: 1/3;
                        grid-row: 1/2;
                    }
                }
                .texto {
                    height: 100%;
                    @media (max-width: 650px){
                        grid-column: 1/6 !important;
                        grid-row: 1/2 !important;
                    }
                    div {
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                    h3, h2, h1 {
                        font-size: 3rem;
                        margin-bottom: 20px;
                        line-height: 1;
                        @media (max-width: 650px){
                            font-size: 1.8rem;
                        }
                    }
                }
                .image {
                    position: relative;
                    @media (max-width: 650px){
                        grid-column: 1/6 !important;
                        grid-row: 2/3 !important;
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
    }
`

export default OurApproach