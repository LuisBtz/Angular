import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';


const Insights = ({blog}) => {

    
    return(
        <InsightsContainer>
            <div className='contenedor' data-aos="fade-down" data-aos-delay="500" data-aos-duration="500">

                <div className='top'>
                    <h2>Insights</h2>
                    <Link to='/blog' ><span>></span> See All News & Insights</Link>
                </div>
                {blog.nodes.map((project) => {
                    const iconGetDataImage = getImage(project.featuredImage && project.featuredImage.asset)
                    const iconGetDataImageAlt = project.featuredImage && project.featuredImage.alt
                    
                    return (
                        <div className='firstItem' key={project._id}>
                            <a className='cont' rel="noreferrer" target='_blank' href={project.link} >
                                <div className='texto'>
                                    <Link className='title' to={`/blogCategory/${project.category.slug.current}`}><span>></span>{project.category.title}</Link>
                                    <h2 className='tagline'>{project.title}</h2>
                                    <div className='middleText'>
                                        <p className='author'><span>></span>{project.author.title}</p>
                                        <p>{project.date}</p>
                                    </div>
                                    <div className='description'>
                                        <BlockContent
                                            blocks={project._rawDescription}
                                        />
                                    </div>
                                    <p className='link'><span>></span>Full Project</p>
                                </div>
                                
                                <div className="image">
                                    <GatsbyImage
                                        style={{ height: "100%", width: "100%" }}
                                        image={iconGetDataImage}
                                        alt={iconGetDataImageAlt}
                                    />
                                </div>                            
                            </a>
                        </div>
                    )
                })[0]}

                <div className='other'>
                    <p>Latest Publications</p>
                    <div className='container'>
                        {blog.nodes.map((project) => {
                            const iconGetDataImage = getImage(project.featuredImage && project.featuredImage.asset)
                            const iconGetDataImageAlt = project.featuredImage && project.featuredImage.alt
                            
                            return (
                                <div className='item' key={project._id}>
                                    <div className='esquinas'>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <a rel="noreferrer" href={project.link}>
                                        <div className="image">
                                            <GatsbyImage
                                                style={{ height: "100%", width: "100%" }}
                                                image={iconGetDataImage}
                                                alt={iconGetDataImageAlt}
                                            />
                                        </div>
                                        <div className='texto'>
                                            <div className='arriba'>
                                                <p><span>></span>{project.title}</p>
                                                <h3>{project.category.title}</h3>
                                            </div>
                                        </div>
                                        
                                        
                                    </a>
                                </div>
                            )
                        }).pop()}
                    </div>
                </div>
            </div>
        </InsightsContainer>
    )
}

const InsightsContainer = styled.section`
background-color: #D7DCE2;
    .contenedor {
        max-width: var(--container);
        width: 100%;
        margin: 0 auto;
        padding: 50px 20px;
        color: var(--gray);
        .top {
            display: grid;
            grid-template-columns: 4fr 1fr;
            grid-gap: 150px;
            align-items: flex-end;
            margin-bottom: 50px;
            border-bottom: solid 1px var(--gray);
            padding-bottom: 20px;
            @media (max-width: 750px) {
                    grid-template-columns: 1fr;
                    grid-gap: 50px;
                    margin-bottom: 20px;
                }
            h2 {
                line-height: 0.8;
                color: var(--black);
            }
            a {
                background-color: var(--yellow);
                color: var(--black);
                display: block;
                width: 190px;
                span {
                    margin-right: 30px;
                }
            }
        }
    .firstItem {
        position: relative;
        a.cont {
            display: grid;
            grid-template-columns: 2fr 3fr;
            grid-gap: 40px;
            @media (max-width: 750px) {
                grid-template-columns: 1fr;
                grid-gap: 10px;
            }
            .texto {
                z-index: 1;
                max-width: var(--container);
                margin-bottom: 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 20px 0;
                @media (max-width: 750px) {
                        grid-template-columns: 1fr;
                        grid-gap: 10px;
                        margin-bottom: 0;
                    }
                .title {
                    color: var(--black);
                    span {
                        margin-right: 30px;
                    }
                    @media (max-width: 750px) {

                    }
                }
                .tagline {
                    grid-column: 3/5;
                    color: var(--black);
                    @media (max-width: 750px) {
                        grid-column: 1/auto;

                    }
                }
                .middleText {
                    display: flex;
                    margin-top: 10px;
                    margin-bottom: 10px;
                    .author {
                        margin-right: 60px;
                    }
                }
                .description {
                    margin-bottom: 10px;
                }
                .link {
                    background-color: var(--green);
                    display: block;
                    width: 145px;
                }
                p {
                    span {
                        margin-right: 30px;
                    }
                }
            }
        }
        
    }
    .other {
        .container {
            border-top: solid 1px var(--gray);
            padding-top: 50px;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap:45px;
            @media (max-width: 750px) {
                grid-template-columns: repeat(2, 1fr);
            }
            @media (max-width: 450px) {
                grid-template-columns: repeat(1, 1fr);
            }
            .item {
                width: 100%;
                padding: 10px;
                position: relative;
                /* padding: 0 20px; */
                .esquinas {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    div {
                        position: absolute;
                        width: 10px;
                        height: 10px;
                        background-color: none;
                        z-index: -1;
                        &:nth-child(1) {
                            top: -5px;
                            left: -5px;
                            border-top: solid 1px var(--darkGray);
                            border-left: solid 1px var(--darkGray);
                        }
                        &:nth-child(2) {
                            top: -5px;
                            right: -5px;
                            border-top: solid 1px var(--darkGray);
                            border-right: solid 1px var(--darkGray);
                        }
                        &:nth-child(3) {
                            bottom: -5px;
                            left: -5px;
                            border-bottom: solid 1px var(--darkGray);
                            border-left: solid 1px var(--darkGray);
                        }
                        &:nth-child(4) {
                            bottom: -5px;
                            right: -5px;
                            border-bottom: solid 1px var(--darkGray);
                            border-right: solid 1px var(--darkGray);
                        }
                    }
                }
                a {
                    position: relative;
                    z-index: 1;
                }
                .image {
                    filter: grayscale(1);
                    transition: all 350ms ease-in-out;
                    &:hover {
                        filter: grayscale(0);
                    }
                }
                .texto {
                    margin-top: 10px;
                    .arriba {
                        p {
                            color: var(--black);
                            span {
                                margin-right: 30px;
                            }
                        }
                        h3 {
                            padding-left: 40px;
                            color: var(--gray);
                        }
                    }
                }
            }
        }
    }
}
   
`

export default Insights