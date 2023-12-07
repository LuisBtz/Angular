import React from 'react';
import styled from 'styled-components';

const Newsletter = () => {
    return(
        <NewsletterContainer>
            <p><span>> </span>Newsletter</p>
            <form>
                <input placeholder='Email' type='email' name='email' />
                <button><span>></span> Subscribe</button>
            </form>
        </NewsletterContainer>
    )
}

const NewsletterContainer = styled.div`
p {
    margin-bottom: 20px;
    span {
        margin-right: 20px;
    }
}
form {
    margin-bottom: 20px;
    position: relative;
    border-bottom: solid 1px white;
    input {
        padding: 5px 0;
        background: none;
        border: none;
        outline: none;
        width: 100%;
    }
    button {
        position: absolute;
        right: 0;
        top: 5px;
        background-color: var(--pink);
        span {
            margin-right: 20px;
        }
    }
}

`

export default Newsletter