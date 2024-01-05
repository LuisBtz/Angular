import { Link } from 'gatsby';
import React, { useState } from "react"
import styled from 'styled-components';
import BlogItemList from './BlogItemList';
import BlogItemGridList from './BlogItemGridList';

const BlogProjectsList = ({categories, blog}) => {


    const [list, setList] = useState(true);
    const [grid, setGrid] = useState(false);



    return(
        <WorkProjectsListContainer id='projectList' data-aos="fade-down" data-aos-delay="500" data-aos-duration="500">
            <div className='container'>
                <div className='nav'>
                    <ul className='list'>
                        <li className='first'><Link to='/insights#projectList'><span>></span>See All</Link></li>
                        {categories.nodes.map((category) => {
                            return (
                                <li className='item' key={category._id}>
                                    <Link to={`/blogCategory/${category.slug.current}#projectList`}>
                                        {category.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    <ul className='buttons'>
                        <li><button onClick={() => (setGrid(false), setList(true))}  className={list ? 'active' : ''}><span>></span>List View</button></li>
                        <li><button onClick={() => (setGrid(true), setList(false))}  className={grid ? 'active' : ''}><span>></span>Grid View</button></li>
                    </ul>
                </div>
                <div className='projectsList'>
                    {
                        list ?
                            <ul className='list'>
                                    {blog.nodes.map((project) => {
                                
                                return (
                                    <BlogItemList project={project} />
                                )
                                })}
                            </ul>
                            :
                            <ul className='grid'>
                                {blog.nodes.map((project) => {
                                    return (
                                        <BlogItemGridList project={project} />
                                    )
                                })}
                            </ul>
                    }
                    
                    
                </div>
            </div>
            
        </WorkProjectsListContainer>
    )
}

const WorkProjectsListContainer = styled.section`
    .container {
        width: 100%;
        max-width: var(--container);
        margin: 0 auto;
        padding: 20px;
        .nav {
            display: grid;
            grid-gap: 40px;
            grid-template-columns: 4fr 1fr;
            border-top: solid 1px var(--gray);
            padding-top: 20px;
            padding-bottom: 0px;
            border-bottom: solid 1px var(--gray);
            @media (max-width: 650px) {
                grid-template-columns: 3fr 2fr;
                grid-gap: 0px;
            }
            ul.list {
                display: inline;
                .first {
                    background-color: var(--gray);
                    color: white;
                }
                li {
                    color: var(--gray);
                    display: inline-block;
                    margin-right: 20px;
                    margin-bottom: 20px;

                    span {
                        margin-right: 30px;
                    }
                }
            }
            ul.buttons {
                padding-left: 20px;
                display: flex;
                @media (max-width: 1030px) {
                    flex-direction: column;
                }
                button.active {
                    background-color: var(--gray);
                    color: white;
                }
                li {
                    &:first-child {
                        margin-right: 20px;
                    }
                    span {
                        margin-right: 10px;
                    }
                }
            }
        }
        .projectsList {
            padding: 50px 0;
            position: relative;
            color: var(--black);
            .list {
                min-height: 300px;
                @media (max-width: 900px) {
                    min-height: 100%;
                }
            }
            .grid {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                grid-gap:45px;
                @media (max-width: 750px) {
                    grid-template-columns: repeat(2, 1fr);
                }
                @media (max-width: 450px) {
                    grid-template-columns: repeat(1, 1fr);
                }
            }
        }

    }
`

export default BlogProjectsList