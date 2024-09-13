import styled from "styled-components";
import { Button } from "../../Styled-components/Button.style";
import { media } from "../../Styled-components/MediaQuery";

const HomeContainer = styled.div`
    width: 100%;
    height: 400px;
    background-image: url("./background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Div = styled.div`
    border-left: 5px solid green;
`
const Paragraph = styled.p`
    font-size: 2.2rem;
    text-transform: capitalize;
    color: var(--font-color);
    font-weight: bold;
    padding-left: 5px;

    @media ${media.mobile} {
        font-size: 1.4rem;
    }
`

const ButtonLink = styled(Button)`
    background-color: green;
    color: white;
    border: none;
    padding: 10px 20px;
    text-transform: capitalize;
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 3px;

    @media ${media.mobile} {
        margin-top: 20px;
    }
`
export { HomeContainer, Paragraph, ButtonLink, Div };