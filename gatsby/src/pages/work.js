import React from "react";
import styled from 'styled-components'
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import { graphql } from "gatsby";
import WorkProjectsList from "../components/Works/WorkProjectsList";
import FeaturedItemWork from "../components/Works/FeaturedItemWork";
import LastItemWork from "../components/Works/LastItemWork";
import ProjectsListWork from "../components/Works/ProjectsListWork";

export const data = graphql`
  query {
    
    sanityWorkPage {
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

    allSanityProjectPage(sort: {orderRank: ASC}) {
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

    allSanityCategoryPage {
      nodes {
        _id
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
            <WorkProjectsList categories={data.allSanityCategoryPage} projects={data.allSanityProjectPage} />
            <FeaturedItemWork projects={data.allSanityProjectPage} />
            <LastItemWork projects={data.allSanityProjectPage}  />
            <ProjectsListWork projects={data.allSanityProjectPage} />
        </Contenedor>
        
    </Layout>
  )
}

const Contenedor = styled.div`
`

export const Head = ({data}) => (
  <Seo title={data.sanityWorkPage.seo.title} description={data.sanityWorkPage.seo.description} image={data.sanityWorkPage.seo.image.asset.url} />
  )



  export default WorkPage