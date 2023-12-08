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
                      <div className='lastItem'>
                        <Link to={`work/${project.slug.current}`}>
                            <div className="image">
                                <GatsbyImage
                                    style={{ height: "100%", width: "100%" }}
                                    image={iconGetDataImage}
                                    alt={iconGetDataImageAlt}
                                />
                            </div>
                            <div className='texto'>
                                <p><span>></span>{project.title}</p>
                                <h2>{project.tagline}</h2>
                                <p ><span>></span>See Full Project</p>
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
padding: 20px;
color: var(--gray);

.lastItem {
    position: relative;
    a {
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-gap: 40px;
        .texto {
            padding: 50px 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
    
}
`
export default LastItem