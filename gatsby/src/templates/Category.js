import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import TemplateProjectsList from '../components/TemplateComponents/Cetegory/TemplateProjectsList';
import FeaturedItemTemplate from '../components/TemplateComponents/Cetegory/FeaturedItemTemplate';
import LastItemProjectTemplate from '../components/TemplateComponents/Cetegory/LastItemProjectTemplate';


export default function SingleCategoriaPage({data: { category, projects, categories} }) {


    
    const gray = true;



    return (
        <Layout gray={gray}>
            <CategoriaContainer>
                <TemplateProjectsList categories={categories} projects={projects} category={category} />
                <FeaturedItemTemplate projects={projects} />
                <LastItemProjectTemplate projects={projects}  />
            </CategoriaContainer>
        </Layout>
    )
}


const CategoriaContainer = styled.div`
    
`




export const query = graphql`
    query($slug: String!){
        category: sanityCategoryPage(slug: { current: {eq: $slug} }){
            title
            slug {
                current
            }
        }

        projects: allSanityProjectPage(filter: {categories: {elemMatch: {slug: {current: {eq: $slug} }}}}sort: {orderRank: ASC}) { 
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

        categories: allSanityCategoryPage {
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

export const Head = () => (
    <Seo title='Nevada Projects | Category' description='Estudio de Diseño & Arte' image='/screenshot.png' />
    )
  