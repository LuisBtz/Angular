import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import HeroProjectTemplate from '../components/TemplateComponents/Project/HeroProjectTemplate';
import ModulosTemplateProject from '../components/TemplateComponents/Project/ModulosTemplateProject';
import RelatedProjectsTemplate from '../components/TemplateComponents/Project/RelatedProjectsTemplate';


export default function SingleProjectPage({data: { project} }) {


    
    const gray = true;



    return (
        <Layout gray={gray}>
            <CategoriaContainer>
                <HeroProjectTemplate project={project} />
                <ModulosTemplateProject content={project.content} />
                <RelatedProjectsTemplate project={project} />
            </CategoriaContainer>
        </Layout>
    )
}


const CategoriaContainer = styled.div`
    
`




export const query = graphql`
    query($slug: String!){
        project: sanityProjectPage(slug: { current: {eq: $slug} }){
            title
            slug {
                current
            }
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
            categories {
                _id
                title
                slug {
                    current
                }
            }
            _rawDescription
            date
            _rawRelatedTopics

            content {
                ... on SanityImageType {
                    _key
                    _type
                    alt
                    asset {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        outputPixelDensities: 1.5
                        placeholder: DOMINANT_COLOR
                    )
                    }
                }
                ... on SanityTextObject {
                    _key
                    _type
                    _rawText
                }
            }
            relatedContent {
                _id
                title
                slug {
                    current
                }
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
            }
        }


    }
`

export const Head = () => (
    <Seo title='Nevada Projects | Category' description='Estudio de Diseño & Arte' image='/screenshot.png' />
    )
  