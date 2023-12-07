import React from "react";
import styled from 'styled-components'
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';


const IndexPage = () => {

  return (
    <Layout>
        <Contenedor id='main' >
            
        </Contenedor>
        
    </Layout>
  )
}

const Contenedor = styled.div`
`

export const Head = () => (
  <Seo title='Nevada Projects' description='Full website soon' image='/screenshot.png' />
  )



  export default IndexPage