import React from 'react';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';


const TextType = ({data}) => {
    return(
        <TextTypeContainer className='item'>
            <div className='texto'>
                <BlockContent
                    blocks={data._rawText}
                />
            </div>
        </TextTypeContainer>
    )
}

const TextTypeContainer = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
`

export default TextType