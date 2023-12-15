import React from "react";
import styled from 'styled-components'
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import { graphql } from "gatsby";
import AboutHero from "../components/About/AboutHero";

export const data = graphql`
  query {
    
    sanityAboutPage {
    mainText
    description
    services {
      _key
      title
      description
      empty
    }
    ourServicesDescription
    ourApproach {
      _key
      _rawTitle
      image {
        alt
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
          )
        }
      }
    }
    teamDescription
    team {
      _key
      title
      position
      image {
        alt
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
          )
        }
      }
    }
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

const white = true;


const WorkPage = ({data}) => {

  
  return (
    <Layout white={white}>
        <Contenedor id='main' >
          <AboutHero about={data.sanityAboutPage} />
        </Contenedor>
        
    </Layout>
  )
}

const Contenedor = styled.div`
  color: var(--white);
`

export const Head = ({data}) => (
  <Seo title={data.sanityAboutPage.seo.title} description={data.sanityAboutPage.seo.description} image={data.sanityAboutPage.seo.image.asset.url} />
  )



  export default WorkPage