import React from "react";
import styled from 'styled-components'
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import FirstItem from "../components/Home/FirstItem";
import { graphql } from "gatsby";
import FeaturedItem from "../components/Home/FeaturedItem";
import LastItem from "../components/Home/LastItem";
import ProjectsList from "../components/Home/ProjectsList";
import TextHero from "../components/Home/TextHero";
import Insights from "../components/Home/Insights";


export const data = graphql`
  query {
    allSanityProjectPage(sort: {orderRank: ASC}) {
      nodes {
        title
        _id
        tagline
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
    allSanityBlogPage {
      nodes {
        title
        category {
          title
          slug {
            current
          }
        }
        author {
          title
        }
        date
        _rawDescription
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
    sanityHomePage {
      description
      seo {
        title
        description
        image {
          asset {
            url
          }
        }
      }
    }
  }
`;


const IndexPage = ({data}) => {

  return (
    <Layout>
        <Contenedor id='main' >
            <FirstItem projects={data.allSanityProjectPage} />
            <FeaturedItem projects={data.allSanityProjectPage} />
            <LastItem projects={data.allSanityProjectPage} />
            <ProjectsList projects={data.allSanityProjectPage} />
            <TextHero description={data.sanityHomePage.description} />
            <Insights blog={data.allSanityBlogPage} />
        </Contenedor>
        
    </Layout>
  )
}

const Contenedor = styled.div`
`

export const Head = ({data}) => (
  <Seo title={data.sanityHomePage.seo.title} description={data.sanityHomePage.seo.description} image={data.sanityHomePage.seo.image.asset.url} />
  )



  export default IndexPage