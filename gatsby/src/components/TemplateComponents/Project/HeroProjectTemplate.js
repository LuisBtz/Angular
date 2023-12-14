import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import { Link } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';

const HeroProjectTemplate = ({project}) => {

    const iconGetDataImage = getImage(project.featuredImage && project.featuredImage.asset)
    const iconGetDataImageAlt = project.featuredImage && project.featuredImage.alt

    

    return(
        <HeroProjectTemplateContainer>
            <div className='featuredImage'>
                <div className="image">
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={iconGetDataImage}
                        alt={iconGetDataImageAlt}
                    />
                </div> 
            </div>
            <div className='container'>
                <div className='top'>
                    <h1>{project.title}</h1>
                    <Link className='category' to={`/category/${project.categories[0].slug.current}`}><p><span>></span>{project.categories[0].title}</p></Link>
                    <p className='date'>{project.date}</p>
                </div>
                <div className='main'>
                    <h2>{project.tagline}</h2>
                    <div className='description'>
                        <button className='readMore'><span>+</span>Read More</button>
                        <div className='block'>
                            <BlockContent
                                blocks={project._rawDescription}
                            />
                        </div>
                    </div>
                    <div className='relatedContent'>
                        <BlockContent
                            blocks={project._rawRelatedTopics}
                        />
                    </div>
                </div>

            </div>
        </HeroProjectTemplateContainer>
    )
}

const HeroProjectTemplateContainer = styled.section`
    .container {
        width: 100%;
        max-width: var(--container);
        margin: 0 auto;
        padding: 50px 20px;
        @media(max-width: 680px) {
            padding: 20px;
        }
        .top {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 40px;
            @media(max-width: 680px) {
                grid-template-columns: 1fr;
                grid-gap: 10px;
            }
            h1 {
                font-size: 0.8rem;
                font-family: var(--regular);
            }.category {
                grid-column: 3/4;
                @media(max-width: 680px) {
                    grid-column: auto;
                }
                p {
                    background-color: var(--green);
                    display: inline-block;
                    span {
                        margin-right: 30px;
                    }
                }

            }
            .date {
                grid-column: 4/5;
                @media(max-width: 680px) {
                    grid-column: auto;
                }
            }
        }
        .main {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 40px;
            margin-top: 20px;
            align-items: flex-end;
            @media(max-width: 680px) {
                grid-template-columns: 1fr;
                grid-gap: 20px;
            }
            h2 {
                grid-column: 1/3;
                @media(max-width: 680px) {
                    grid-column: auto;
                }
            }
            .description {
                grid-column: 3/5;
                @media(max-width: 680px) {
                    grid-column: auto;
                }
                button {
                    color: var(--gray);
                    cursor: auto;
                    span {
                        margin-right: 20px;
                    }
                }
            }
            .relatedContent {
                color: var(--gray);
            }
        }
    }
`

export default HeroProjectTemplate