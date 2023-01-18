import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
   
}
@font-face {
    font-family: 'Graphik';
    src: url('/fonts/GraphikBold.otf') format('opentype');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Graphik';
    src: url('/fonts/GraphikLight.otf') format('opentype');
    font-weight: lighter;
    font-style: normal;
}

@font-face {
    font-family: 'Graphik';
    src: url('/fonts/GraphikThin.otf') format('opentype');
    font-weight:300;
}


* {
    font-family: 'Graphik';
}


`;

export default GlobalStyle;
