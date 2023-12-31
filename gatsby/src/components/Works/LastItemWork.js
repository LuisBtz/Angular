import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';


const LastItemWork = ({projects}) => {
    return(
        <LastItemContainer data-aos="fade-down" data-aos-delay="500" data-aos-duration="500">
            {projects.nodes.map((project) => {
                  const iconGetDataImage = getImage(project.featuredImage && project.featuredImage.asset)
                  const iconGetDataImageAlt = project.featuredImage && project.featuredImage.alt
                
                  return (
                      <div className='lastItem' key={project._id}>
                        <Link to={`/work/${project.slug.current}`}>
                            <div className='texto'>
                                <div className='arriba'>
                                    <p><span>></span>{project.title}</p>
                                    <h2>{project.tagline}</h2>
                                </div>
                                <p className='abajo'><span>></span>See Full Project</p>
                            </div>
                            <div className="image">
                                <GatsbyImage
                                    style={{ height: "100%", width: "100%" }}
                                    image={iconGetDataImage}
                                    alt={iconGetDataImageAlt}
                                />
                            </div>
                            
                            
                            
                        </Link>
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
export default LastItemWork