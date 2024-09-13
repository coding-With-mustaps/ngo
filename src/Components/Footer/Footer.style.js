import styled from "styled-components";
import { media } from "../../Styled-components/MediaQuery";
import { Button } from "../../Styled-components/Button.style";

const FooterContainer = styled.footer`
    width: 100%;
    overflow-x: hidden;
    background-color: var(--background-color);
    color: var(--font-color);

    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`

const Div = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 250px);
    gap: 30px;
    place-content: center;
    padding: 20px 0;
    margin: 0 10px;

    @media ${media.laptop} {
        grid-template-columns: repeat(3, 300px);
    }

    @media ${media.tablet} {
        grid-template-columns: repeat(2, 300px);
    }

    @media ${media.mobile}{
        grid-template-columns: repeat(1, 300px);
    };
`

const LastDiv = styled.div`
    width: 100%;
    background-color: var(--second-background-color);
    display: flex;
    justify-content:space-between;
    align-items: center;
    gap: 20px;
    padding: 10px 30px;

    ol {
        display: flex;
        justify-content:center;
        align-items: center;
    }

    .socialMediaIcons {
        color: white;
        font-size: 25px;
        margin-right: 20px;

        @media ${media.mobile} {
            font-size: 17px;
        }
    }
`

const Form = styled.form`
    width:250px;
    background-color: white;
    display: flex;
    justify-content:center;
    align-items: center;
    margin-top:10px;
`

const Input = styled.input`
    flex-grow: 1;
    width: 90%;
    padding: 5px;
    font-size: 1.2rem;
    font-weight: 300;
    outline: none;
    border: 0;
    background-color: white;
    color: black;
`

const SubmitButton = styled(Button).attrs({
    type: "submit"
})`
    color: white;
`

export { FooterContainer, Div, LastDiv, Input, Form, SubmitButton };