import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogItemList = ({project}) => {

    const iconGetDataImage = getImage(project.featuredImage && project.featuredImage.asset)
const iconGetDataImageAlt = project.featuredImage && project.featuredImage.alt

    return(
    <WorkItemListContainer>
        <div className='contenedor'>

            <a rel="noreferrer" target='_blank' href={`${project.link}`}>
                <div className='item'>
                    <p className='iz'><span>></span>{project.title}</p>
                    <div className='de'>
                        <p className='cat'>{project.category.title}</p>
                        <p className='date'>{project.author.title}</p>

                    </div>
                </div>
            </a>
            <a rel="noreferrer" target='_blank' href={`/work/${project.link}`}>
                <div className="image">
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={iconGetDataImage}
                        alt={iconGetDataImageAlt}
                    />
                </div>   

            </a>
        </div>

        </WorkItemListContainer>
    )
}

const WorkItemListContainer = styled.li`
    .contenedor {
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-gap: 40px;
        @media (max-width: 900px) {
            grid-template-columns: 1fr;
            grid-gap: 10px;
        }
        .item {
            display: flex;
            justify-content: space-between;
            padding-top: 5px;
            padding-bottom: 5px;
            align-items: center;
            .iz {
                font-size: 30px;
                font-family: var(--light);
                span  {
                    margin-right: 20px;
                }
            }
            .de {
                @media (max-width: 560px) {
                    display: none;
                }
                p {
                    display: inline-block;
                }
                .cat {
                    width: 100px;
                }
                .date {
                    width: 110px;
                }
            }
            &:hover {
                background-color: var(--green);
            }
        }
        .image {
            display: none;
        }
    }
    &:hover {
        .image {
            position: absolute;
            right: 0;
            top: 50px;
            display: block;
            width: calc(40% - 20px);
            height: 400px;
            @media (max-width: 900px) {
                display: none;
            }
            img {
                object-fit: cover;
                object-position: bottom;
            }
        }
    }
`

export default BlogItemList