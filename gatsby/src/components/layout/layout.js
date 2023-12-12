import React from "react";
import { Normalizer } from "../styles/Normalizer"
import { Typography } from "../styles/Typography"
import Header from "./header"
import Footer from "./footer";
import styled from "styled-components";




function Layout({ children, gray  }) {



  return (
    <>
      <Normalizer />
      <Typography />
      <Header gray={gray} />
      <Grid>
        <div className="first"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="last"></div>
      </Grid>
      <main >{children}</main>
      <Footer />

    </>
  )
}

const Grid = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    z-index: -1;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    max-width: var(--container);
    padding-left: -20px;
    padding-right: -20px;
    box-sizing: content-box;
    margin: 0 auto;
    .first {
        position: absolute;
        width: 1px;
        height: 100vh;
        border-left: solid 1px #d7dce2;
        border-right: none;
        left: 10px;
    }
    .last {
        position: absolute;
        width: .5px;
        height: 100vh;
        border-right: solid 1px #d7dce2;
        border-left: none;
        right: 10px;
    }
    div {
        height: 100vh;
        border-left: solid 1px #d7dce2;
        border-right: solid 1px #d7dce2;
    }
`


export default Layout