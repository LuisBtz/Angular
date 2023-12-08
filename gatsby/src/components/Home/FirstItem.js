import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';


const FirstItem = ({projects}) => {
    return(
        <FirstItemContainer>
            {projects.nodes.map((project) => {
                  const iconGetDataImage = getImage(project.featuredImage && project.featuredImage.asset)
                  const iconGetDataImageAlt = project.featuredImage && project.featuredImage.alt
                
                  return (
                      <div className='firstItem'>
                        <Link to={`work/${project.slug.current}`}>
                            <div className="image">
                                <GatsbyImage
                                    style={{ height: "100%", width: "100%" }}
                                    image={iconGetDataImage}
                                    alt={iconGetDataImageAlt}
                                />
                            </div>
                            <div className='esquinas'>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className='texto'>
                                <p><span>></span>{project.title}</p>
                                <h1>{project.tagline}</h1>
                            </div>
                        </Link>
                      </div>
                  )
                })[0]}
        </FirstItemContainer>
    )
}

const FirstItemContainer = styled.section`
.firstItem {
    position: relative;
    .texto {
        color: var(--white);
        position: absolute;
        z-index: 1;
        max-width: var(--container);
        width: 100%;
        padding: 20px;
        left: 50%;
        top: 50px;
        transform: translateX(-50%);
        p {
            span {
                margin-right: 30px;
            }
        }
        h1 {
            width: 700px;
        }
    }
    .esquinas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        div {
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: none;
            &:nth-child(1) {
                top: 20px;
                left: 50px;
                border-top: solid 1px var(--white);
                border-left: solid 1px var(--white);
            }
            &:nth-child(2) {
                top: 20px;
                right: 50px;
                border-top: solid 1px var(--white);
                border-right: solid 1px var(--white);
            }
            &:nth-child(3) {
                bottom: 20px;
                left: 50px;
                border-bottom: solid 1px var(--white);
                border-left: solid 1px var(--white);
            }
            &:nth-child(4) {
                bottom: 20px;
                right: 50px;
                border-bottom: solid 1px var(--white);
                border-right: solid 1px var(--white);
            }
        }
    }
}
`

export default FirstItem