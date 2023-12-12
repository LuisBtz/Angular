import { createGlobalStyle } from 'styled-components';

import aeoeot from '../../assets/fonts/Aeonik-Light.eot';
import aeosvg from '../../assets/fonts/Aeonik-Light.svg';
import aeottf from '../../assets/fonts/Aeonik-Light.ttf';
import aeowoff from '../../assets/fonts/Aeonik-Light.woff';
import aeowoff2 from '../../assets/fonts/Aeonik-Light.woff2';

import aeoregeot from '../../assets/fonts/Aeonik-Regular.eot';
import aeoregsvg from '../../assets/fonts/Aeonik-Regular.svg';
import aeoregttf from '../../assets/fonts/Aeonik-Regular.ttf';
import aeoregwoff from '../../assets/fonts/Aeonik-Regular.woff';
import aeoregwoff2 from '../../assets/fonts/Aeonik-Regular.woff2';


export const Typography = createGlobalStyle`
@font-face {
    font-family: 'Aeonik Light';
    src: url('${aeoeot}');
    src: url('${aeowoff2}') format('woff2'),
        url('${aeowoff}') format('woff'),
        url('${aeottf}') format('truetype'),
        url('${aeosvg}#PPPangramSans-Semibold') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Aeonik Regular';
    src: url('${aeoregeot}');
    src: url('${aeoregwoff2}') format('woff2'),
        url('${aeoregwoff}') format('woff'),
        url('${aeoregttf}') format('truetype'),
        url('${aeoregsvg}#PPPangramSans-Semibold') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}


:root {
    --light: 'Aeonik Light', sans-serif;
    --regular: 'Aeonik Regular', sans-serif;
    --black: #000000;
    --white: #ffffff;
    --gray: #A5ACB7;
    --darkGray: #A5ACB7;
    --green: #3EFF4C;
    --pink: #C100B3;
    --softPink: #FFCCFF;
    --yellow: #FFF64D;
    --blue: #00FFFF;
    --red: #FF0000;
    overflow-wrap: break-word;
    --container: 1281px;
    --padding: 20px;
}
html {
      scroll-behavior: smooth;
      font-size: 18px !important;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0; 
    }
    body {
        background-color: var(--white);
        color: var(--black);
        font-size: 14px;
        font-family: var(--regular);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        width: 100%;
        overflow-x: hidden;
        position: relative;
        -webkit-font-smoothing: antialiased;
        
    }
    ::-webkit-scrollbar {
        display: none;
    }
    p {
        font-family: var(--slim);
        font-weight: lighter;
    }

    h1 {
        font-size: 4rem;
        font-family: var(--light);
        @media (max-width: 750px) {
            font-size: 3rem;

            }
    }
    h2 {
        font-size: 4rem;
        font-family: var(--light);
        @media (max-width: 750px) {
            font-size: 3rem;

            }
    }
    h3 {
        font-family: var(--light);
    }
    
`