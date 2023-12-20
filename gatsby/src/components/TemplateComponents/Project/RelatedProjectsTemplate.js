import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';

const RelatedProjectsTemplate = ({project}) => {
    return(
        <RelatedProjectsTemplateContainer>
            <div className='container'>
                <div className='bar'>
                    <p className='more'><span>></span>More Projects </p>
                    <div className='all'>
                        <Link to='/work/'><span>></span>See All Work</Link>
                    </div>
                </div>
            <div className='projects'>
                {project.relatedContent.map((project) => {
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
                            <Link to={`/work/${project.slug.current}`}>
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
                                        <h3>{project.tagline}</h3>
                                    </div>
                                </div>
                                
                                
                            </Link>
                        </div>
                    )
                })}
            </div>
            </div>
        </RelatedProjectsTemplateContainer>
    )
}

const RelatedProjectsTemplateContainer = styled.section`
    .container {
        width: 100%;
        max-width: var(--container);
        margin: 0 auto;
        padding: 0 20px;
        .bar {
            border-top: solid 1px var(--gray);
            padding-top: 20px;
            padding-bottom: 20px;
            border-bottom: solid 1px var(--gray);
            display: flex;
            justify-content: space-between;
            span {
                margin-right: 30px;
            }
            a {
                background-color: var(--yellow);
                position: relative;
                right: calc(100% - 20px)
            }
        }
        .projects {
            margin-top: 50px;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap:45px;
            padding-bottom: 50px;
            @media (max-width: 750px) {
                grid-template-columns: repeat(2, 1fr);
            }
            .item {
                width: 100%;
                padding: 10px;
                position: relative;
                /* padding: 0 20px; */
                &:first-child {
                    grid-column: 1/3;
                    @media (max-width: 750px) {
                        grid-column: auto;
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
                            border-top: solid 1px var(--gray);
                            border-left: solid 1px var(--gray);
                        }
                        &:nth-child(2) {
                            top: -5px;
                            right: -5px;
                            border-top: solid 1px var(--gray);
                            border-right: solid 1px var(--gray);
                        }
                        &:nth-child(3) {
                            bottom: -5px;
                            left: -5px;
                            border-bottom: solid 1px var(--gray);
                            border-left: solid 1px var(--gray);
                        }
                        &:nth-child(4) {
                            bottom: -5px;
                            right: -5px;
                            border-bottom: solid 1px var(--gray);
                            border-right: solid 1px var(--gray);
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
`

export default RelatedProjectsTemplate