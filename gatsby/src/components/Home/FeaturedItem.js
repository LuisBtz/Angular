import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';


const FeaturedItem = ({projects}) => {
    return(
        <FeaturedItemContainer data-aos="fade-down" data-aos-delay="500" data-aos-duration="500">
            <div className='top'>
                <h2>Featured Work</h2>
                <Link to='/work' ><span>></span> See All Work</Link>
            </div>
            {projects.nodes.map((project) => {
                  const iconGetDataImage = getImage(project.featuredImage && project.featuredImage.asset)
                  const iconGetDataImageAlt = project.featuredImage && project.featuredImage.alt
                
                  return (
                      <div className='firstItem' key={project._id}>
                        <Link to={`work/${project.slug.current}`}>
                            <div className='texto'>
                                <p className='title'><span>></span>{project.title}</p>
                                <h3 className='tagline'>{project.tagline}</h3>
                                <p className='link'><span>></span> See Full Project</p>
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
        </FeaturedItemContainer>
    )
}

const FeaturedItemContainer = styled.section`
max-width: var(--container);
width: 100%;
margin: 30px auto;
padding: 20px;
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
        }
        a {
            background-color: var(--softPink);
            color: var(--black);
            display: block;
            width: 130px;
            span {
                margin-right: 30px;
            }
        }
    }
.firstItem {
    position: relative;
    
    .texto {
        z-index: 1;
        max-width: var(--container);
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 40px;
        margin-bottom: 10px;
        @media (max-width: 750px) {
                grid-template-columns: 1fr;
                grid-gap: 10px;
            }
        .title {
            grid-column: 1/3;
            color: var(--black);
            @media (max-width: 750px) {
                grid-column: 1/auto;

            }
        }
        .tagline {
            grid-column: 3/5;
            @media (max-width: 750px) {
                grid-column: 1/auto;

            }
        }
        .link {
            background-color: var(--blue);
            display: block;
            width: 145px;
            color: var(--black);
        }
        p {
            span {
                margin-right: 30px;
            }
        }
    }
}
`

export default FeaturedItem