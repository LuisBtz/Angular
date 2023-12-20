import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlockContent from '@sanity/block-content-to-react';
import { Link } from 'gatsby';

const HeroBlog = ({blog}) => {
    return(
        <HeroBlogContainer>
            {blog.nodes.map((project) => {
                  const iconGetDataImage = getImage(project.featuredImage && project.featuredImage.asset)
                  const iconGetDataImageAlt = project.featuredImage && project.featuredImage.alt
                
                  return (
                      <div className='firstItem' key={project._id}>
                            <div className='texto' data-aos="fade-down" data-aos-delay="500" data-aos-duration="500">
                                <p className='title'><span>></span>{project.author.title}</p>
                                <h3 className='tagline'><Link to={`/blogCategory/${project.category.slug.current}`}><span>></span>{project.category.title}</Link></h3>
                                <div className='link'><p>{project.date}</p></div>
                            </div>
                            <div className='top' data-aos="fade-down" data-aos-delay="500" data-aos-duration="500">
                                <h1>{project.title}</h1>
                                <div className='desc'>
                                    <div className='text'>
                                        <BlockContent
                                            blocks={project._rawDescription}
                                        />
                                    </div>
                                    <a href={project.link} target='_blank' rel="noreferrer" >Continue Reading</a>
                                </div>
                            </div>
                            <div className="image" data-aos="fade-down" data-aos-delay="500" data-aos-duration="500">
                                <GatsbyImage
                                    style={{ height: "100%", width: "100%" }}
                                    image={iconGetDataImage}
                                    alt={iconGetDataImageAlt}
                                />
                            </div>                            
                      </div>
                  )
                })[0]}
        </HeroBlogContainer>
    )
}

const HeroBlogContainer = styled.section`
max-width: var(--container);
width: 100%;
margin: 30px auto;
padding: 20px;
color: var(--gray);
.firstItem {
    position: relative;
    .top {
        padding-top: 30px;
        padding-bottom: 30px;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 40px;
        h1 {
            grid-column: 1/3;
            color: var(--black);
            @media (max-width: 650px){
                grid-column: 1/6;
            }
        }
        .desc {
            grid-column: 3/5;
            @media (max-width: 650px){
                grid-column: 1/6;
            }
            p {
                color: var(--black);
            }
            a {
            }
        }
    }
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
            grid-column: 3/4;
            span {
                margin-right: 30px;
            }
            a {
                background-color: var(--green);
                color: var(--black);
                display: inline-block;
                font-family: var(--regular);
            }
            @media (max-width: 750px) {
                grid-column: 1/auto;

            }
        }
        .link {
            display: block;
            color: var(--black);
            grid-column: 4/5;
        }
        p {
            span {
                margin-right: 30px;
            }
        }
    }
}

`

export default HeroBlog