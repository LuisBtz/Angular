import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlockContent from '@sanity/block-content-to-react';

const Hero2Blog = ({blog}) => {
    return(
        <LastItemContainer>
            {blog.nodes.map((project) => {
                  const iconGetDataImage = getImage(project.featuredImage && project.featuredImage.asset)
                  const iconGetDataImageAlt = project.featuredImage && project.featuredImage.alt
                
                  return (
                      <div className='lastItem' key={project._id}>
                        <a href={`${project.link}`}>
                            <div className='texto'>
                                <div className='arriba'>
                                    <p><span>></span>{project.author.title}</p>
                                    <h2>{project.title}</h2>
                                </div>
                                <div className='abajo'>
                                    <div className='line1'>                                    
                                        <p className='category'><p><span>></span>{project.category.title}</p></p>
                                        <p className='date'>{project.date}</p>
                                    </div>
                                    <div className='text'>
                                        <BlockContent
                                            blocks={project._rawDescription}
                                        />
                                    </div>
                                    <p className='continue'>Continue Reading</p>
                                </div>
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
                })[1]}
        </LastItemContainer>
    )
}


const LastItemContainer = styled.section`
max-width: var(--container);
width: 100%;
margin: 30px auto;
padding: 0 20px;
color: var(--black);
.lastItem {
    position: relative;
    a {
        display: grid;
        grid-template-columns: 2fr 3fr;
        grid-gap: 40px;
        border-top: solid 1px var(--gray);
        padding-top: 40px;
        @media (max-width: 750px) {
            grid-template-columns: 1fr;
            grid-gap: 10px;
            .image {
                grid-row: 2/3;
            }
            .rexto {
                grid-row: 1/2;
            }
        }
        .texto {
            padding: 20px 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .arriba {
                p {
                    span {
                        margin-right: 30px;
                    }
                }
            }
            .abajo {
                .line1 {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-gap: 40px;
                    margin-bottom: 20px;
                    .category {
                        p {
                            display: inline-block;
                            background-color: var(--yellow);
                        }
                    }
                }
                span {
                    margin-right: 30px;
                }
                .continue {
                    color: var(--gray);
                }
            }
        }
    }
    
}
`
export default Hero2Blog