import React from 'react';
import styled from 'styled-components';
import ImageType from './ImageType';
import TextType from './TextType';

const modulesArr = [
    { name: "imageType", comp: ImageType },
    { name: "textObject", comp: TextType }
  ];

const ModulosTemplateProject = ({content, props}) => {
    let final_arr = [];
  
    content.forEach((poMod) => {
      modulesArr.forEach((mMod) => {
        if (poMod["_type"] === mMod.name) {
          final_arr.push({ ...poMod, ...mMod });
        }
      });
    });
    return(
        <ModulosTemplateProjectContainer>
            {final_arr.map((Module, i) => (
                <Module.comp key={i} data={{ ...Module }} props={props} />
            ))}
        </ModulosTemplateProjectContainer>
    )
}

const ModulosTemplateProjectContainer = styled.section`
    width: 100%;
    max-width: var(--container);
    margin: 0 auto 100px;
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-gap: 30px;
    @media (max-width: 600px) {
        grid-template-columns: 1fr;

    }
    .item {
        &:nth-child(14n-13) {
            grid-column: 1/11;
        }
        &:nth-child(14n-12) {
            grid-column: 3/9;
        }
        &:nth-child(14n-11) {
            grid-column: 1/6;
        }
        &:nth-child(14n-10) {
            grid-column: 6/11;
        }
        &:nth-child(14n-9) {
            grid-column: 1/11;
        }
        &:nth-child(14n-8) {
            grid-column: 1/5;
        }
        &:nth-child(14n-7) {
            grid-column: 5/9;
        }
        &:nth-child(14n-6) {
            grid-column: 1/11;
        }
        &:nth-child(14n-5) {
            grid-column: 3/7;
        }
        &:nth-child(14n-4) {
            grid-column: 7/11;
        }
        &:nth-child(14n-3) {
            grid-column: 1/11;
        }
        &:nth-child(14n-2) {
            grid-column: 1/5;
        }
        &:nth-child(14n-1) {
            grid-column: 5/9;
        }
        &:nth-child(14n) {
            grid-column: 3/9;
        }
        @media (max-width: 600px) {
            grid-column: auto !important;
        }
    }
`

export default ModulosTemplateProject