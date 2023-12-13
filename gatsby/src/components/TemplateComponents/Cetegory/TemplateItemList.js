import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';

const TemplateItemList = ({project}) => {

    const iconGetDataImage = getImage(project.featuredImage && project.featuredImage.asset)
const iconGetDataImageAlt = project.featuredImage && project.featuredImage.alt

    return(
    <WorkItemListContainer>
        <div className='contenedor'>

            <Link to={`/work/${project.slug.current}`}>
                <div className='item'>
                    <p className='iz'><span>></span>{project.title}</p>
                    <div className='de'>
                        <p className='cat'>{project.categories[0].title}</p>
                        <p className='date'>{project.date}</p>

                    </div>
                </div>
            </Link>
            <Link to={`/work/${project.slug.current}`}>
                <div className="image">
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={iconGetDataImage}
                        alt={iconGetDataImageAlt}
                    />
                </div>   

            </Link>
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
                background-color: var(--red);
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

export default TemplateItemList