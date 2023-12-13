import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';


export default function SingleProjectPage({data: { project} }) {


    
    const gray = true;



    return (
        <Layout gray={gray}>
            <CategoriaContainer>
                <h1>{project.title}</h1>
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
            _rawRelatedContent
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
        }


    }
`

export const Head = () => (
    <Seo title='Nevada Projects | Category' description='Estudio de Diseño & Arte' image='/screenshot.png' />
    )
  