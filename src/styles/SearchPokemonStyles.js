import styled from "styled-components";

const SearchPokemonStyles = styled.div`

    // Css grid
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 0.2fr 1fr 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        justify-items: center;
        grid-template-areas:
            "top top top top"
            "left left right right"
            "left left right right";
    }
    .top { grid-area: top; }
    .left { grid-area: left; }
    .right { grid-area: right; }
    .left, .right { margin-top: 50px; }

    // Form input (Pokemon Search)
    input[type="text"] {
        border-radius: 50px;
        background: #f2f2f2;
        border: 1px solid #3b4cca;
        color: #3b4cca;
        cursor: default;
        font-weight: bold;
        width: 100%;
        padding: 0 16px;
        height:36px;
        margin: 0 auto;
    }

    h2, h3 {
        color: #ff0000;
    }

    .pokemon-title {
        color: #3b4cca;
        background-color: #ffde00;
        overflow: hidden;
    }


`;

export default SearchPokemonStyles;