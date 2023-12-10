import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';


const LastItem = ({projects}) => {
    return(
        <LastItemContainer>
            {projects.nodes.map((project) => {
                  const iconGetDataImage = getImage(project.featuredImage && project.featuredImage.asset)
                  const iconGetDataImageAlt = project.featuredImage && project.featuredImage.alt
                
                  return (
                      <div className='lastItem' key={project._id}>
                        <Link to={`work/${project.slug.current}`}>
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
                                    <h2>{project.tagline}</h2>
                                </div>
                                <p className='abajo'><span>></span>See Full Project</p>
                            </div>
                            
                            
                        </Link>
                      </div>
                  )
                })[2]}
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
        grid-template-columns: 3fr 2fr;
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
                width: 135px;
                background-color: var(--blue);
                span {
                    margin-right: 30px;
                }
            }
        }
    }
    
}
`
export default LastItem