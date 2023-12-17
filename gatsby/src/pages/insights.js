import React from "react";
import styled from 'styled-components'
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import { graphql } from "gatsby";
import HeroBlog from "../components/Blog/HeroBlog";
import Hero2Blog from "../components/Blog/Hero2Blog";
import BlogProjectsList from "../components/Blog/BlogProjectsList";
import BlogListWork from "../components/Blog/BlogListWork";

export const data = graphql`
  query {
    
    allSanityBlogPage {
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

  allSanityProjectPage(sort: {orderRank: ASC}, limit: 4) {
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

  allSanityBlogCategories {
    nodes {
      title
      slug {
        current
      }
    }
  }

    
  }
`;

const gray = true;


const WorkPage = ({data}) => {

  
  return (
    <Layout gray={gray}>
        <Contenedor id='main' >
            <HeroBlog blog={data.allSanityBlogPage}  />
            <Hero2Blog blog={data.allSanityBlogPage}  />
            <BlogProjectsList blog={data.allSanityBlogPage} categories={data.allSanityBlogCategories} />
            <BlogListWork projects={data.allSanityProjectPage} />
        </Contenedor>
        
    </Layout>
  )
}

const Contenedor = styled.div`
  color: var(--white);
`

export const Head = ({data}) => (
  <Seo title={data.allSanityBlogPage.nodes[0].title} description={data.allSanityBlogPage.nodes[0].author.title} image={data.allSanityBlogPage.nodes[0].featuredImage.asset.url} />
  )



  export default WorkPage