import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const RelatedProjectsTemplate = ({project}) => {
    return(
        <RelatedProjectsTemplateContainer>
            <div className='container'>
                <div className='bar'>
                    <p className='more'><span>></span>More Projects </p>
                    <div className='all'>
                        <Link to='/work/'><span>></span>See All Work</Link>
                    </div>
                </div>
            </div>
        </RelatedProjectsTemplateContainer>
    )
}

const RelatedProjectsTemplateContainer = styled.section`

`

export default RelatedProjectsTemplate