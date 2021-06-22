import styled from "styled-components";
import font from "../fonts/PocketMonk-15ze.ttf";


const GlobalStyles = styled.div`

    @font-face {
        font-family: PocketMonk-15ze;
        src: url(${font});
    }

    font-family: "Roboto";

    h1, footer {
        text-align: center;
    }

    header h1 {
        font-family: PocketMonk-15ze, "Roboto";
        font-size: 60px;
    }

    .pokeball {
        vertical-align: sub;
    }

`;

export default GlobalStyles;