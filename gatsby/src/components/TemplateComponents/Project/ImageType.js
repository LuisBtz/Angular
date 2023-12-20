import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ImageType = ({data}) => {
    const bgGetDataImage = getImage(data.asset)
    const bgGetDataImageAlt = data.alt

    return(
        <ImageTypeContainer className='item' data-aos="fade-down" data-aos-delay="500" data-aos-duration="500">
            <div className='image'>
                <GatsbyImage
                    image={bgGetDataImage}
                    alt={bgGetDataImageAlt}
                />
            </div>
            <div className='esquinas'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </ImageTypeContainer>
    )
}

const ImageTypeContainer = styled.div`
position: relative;
    .esquinas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        div {
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: none;
            z-index: -1;
            &:nth-child(1) {
                top: -5px;
                left: -5px;
                border-top: solid 1px var(--gray);
                border-left: solid 1px var(--gray);
            }
            &:nth-child(2) {
                top: -5px;
                right: -5px;
                border-top: solid 1px var(--gray);
                border-right: solid 1px var(--gray);
            }
            &:nth-child(3) {
                bottom: -5px;
                left: -5px;
                border-bottom: solid 1px var(--gray);
                border-left: solid 1px var(--gray);
            }
            &:nth-child(4) {
                bottom: -5px;
                right: -5px;
                border-bottom: solid 1px var(--gray);
                border-right: solid 1px var(--gray);
            }
        }
    }
`

export default ImageType