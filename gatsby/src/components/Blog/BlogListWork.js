import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';

const BlogListWork = ({projects}) => {

    // let arrayMinus = projects.nodes.splice(0, 2)



    return (
        <ProjectsListContainer>
            <div className='contenedor'>
                <div className='top'>
                    <div className='iz'>
                        <p><span>></span>Latest Publications</p>
                    </div>
                    <Link className='de' to='/work'>
                        <p><span>></span>See All Work</p>
                    </Link>
                </div>
                <div className='cont'>
                    {projects.nodes.map((project) => {
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
                                <Link to={`work/${project.slug.current}`} target='_blank' rel="noreferrer" >
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
        </ProjectsListContainer>
    )
}

const ProjectsListContainer = styled.section`
    max-width: var(--container);
    width: 100%;
    margin: 50px auto;
    padding: 0 20px;
    color: var(--black);

    .contenedor {
        .top {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 40px;
            padding-top: 20px;
            padding-bottom: 20px;
            border-bottom: solid 1px var(--gray);
            border-top: solid 1px var(--gray);
            margin-bottom: 50px;
            span {
                margin-right: 30px;
            }
            .iz {
                grid-column: 1/3;
            }
            .de {
                grid-column: 5/6;
                p {
                    background-color: var(--yellow);
                    display: inline-block;
                }
            }
        }
        .cont {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap:45px;

            @media (max-width: 750px) {
                grid-template-columns: repeat(2, 1fr);
            }

        }
        
        .item {
            width: 100%;
            padding: 10px;
            position: relative;
            /* padding: 0 20px; */
            &:nth-child(1){
                grid-column: 1/3;
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
`

export default BlogListWork