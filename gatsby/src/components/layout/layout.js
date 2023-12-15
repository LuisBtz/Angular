import React from "react";
import { Normalizer } from "../styles/Normalizer"
import { Typography } from "../styles/Typography"
import Header from "./header"
import Footer from "./footer";
import styled from "styled-components";




function Layout({ children, gray, white  }) {



  return (
    <Cont>
      <Normalizer />
      <Typography />
      <Header gray={gray} white={white} />
      <Grid className={white ? 'white' : ''}>
        <div className="container">
          <div className="first"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div className="last"></div>
        </div>
      </Grid>
      <main >{children}</main>
      <Footer />

    </Cont>
  )
}

const Cont = styled.div`


  .white {
    background-color: var(--gray);
  }
  .logo.white {
    background-color: inherit;
  }
  .text.white {
    background-color: inherit;
  }
`

const Grid = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    .container {
      width: 100vw;
      height: 100vh;
      display: grid;
      position: absolute;
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

    }
`


export default Layout