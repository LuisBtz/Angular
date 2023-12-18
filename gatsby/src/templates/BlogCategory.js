import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import HeroBlog from '../components/Blog/HeroBlog';
import Hero2Blog from '../components/Blog/Hero2Blog';
import BlogListWork from '../components/Blog/BlogListWork';
import BlogProjectsListTemplate from '../components/Blog/BlogProjectsListTemplate';


export default function SingleCategoriaPage({data: { category, projects, categories, blog} }) {


    
    const gray = true;



    return (
        <Layout gray={gray}>
            <CategoriaContainer>
                <HeroBlog blog={blog} />
                <Hero2Blog blog={blog}  />
                <BlogProjectsListTemplate categories={categories} blog={blog} category={category} />
                <BlogListWork projects={projects} />
            </CategoriaContainer>
        </Layout>
    )
}


const CategoriaContainer = styled.div`
    
`




export const query = graphql`
    query($slug: String!){
        category: sanityBlogCategories(slug: { current: {eq: $slug} }){
            title
            slug {
                current
            }
        }

        

        blog: allSanityBlogPage(filter: {category:  {slug: {current: {eq: $slug} }}}) { 

            nodes {
                title
                category {
                    title
                    slug {
                    current
                    }
                }
                _rawDescription
                author {
                    title
                }
                date
                link
                featuredImage {
                    alt
                    asset {
                        url
                        gatsbyImageData(
                            layout: FULL_WIDTH
                            outputPixelDensities: 1.5
                            placeholder: DOMINANT_COLOR
                        )
                    }
                }
            }

        }

        projects: allSanityProjectPage(sort: {orderRank: ASC}) { 
        nodes {
            title
            _id
            tagline
            categories {
            _id
            title
            }
            date
            featuredImage {
            alt
            asset {
                url
                gatsbyImageData(
                layout: FULL_WIDTH
                outputPixelDensities: 1.5
                placeholder: DOMINANT_COLOR
                )
            }
            }
            slug {
            current
            }
            
        }
        }


        categories: allSanityBlogCategories {
        nodes {
            _id
            title
            slug {
            current
            }
        }
        }
        
    }
`

export const Head = ({data: { category, projects } }) => (
    <Seo title={`Angualar | ${category.title} Category`} description={`Angular category page for: ${category.title}`}  image={projects.nodes[0] && projects.nodes[0].featuredImage.asset.url} />
    )
  