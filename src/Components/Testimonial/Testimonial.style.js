import styled from "styled-components";
import { Flower } from "../../Styled-components/Button.style";
import { HeadingTwo } from "../About/About.style";
import { media } from "../../Styled-components/MediaQuery";

const TestimonialContainer = styled.div`
`

const TestimonialFlower = styled(Flower)``

const H2 = styled(HeadingTwo)`
    text-align: center;
`
// Images container
const Div = styled.div`
    gap: 13px;
    border-radius: 3px;
    overflow-x: auto;
    margin: 10px;
    display: grid;
    grid-template-columns: repeat(5, 300px);
    place-content: center;
`

// each image div
const Testimony = styled.div`
    width: 300px;
    height: 350px;
    box-shadow: 0 0 4px gray;
    flex-shrink: 0;
    @media ${media.mobile} {
        width: 290px;
    }

    p {
        padding: 5px;
    }
`

const Image = styled.img`
    width: 100%;
    height: 230px;
    object-fit: cover;
    object-position: center;
    @media ${media.mobile} {
        width: 100%;
        height: 200px; /* Adjust height for mobile if needed */
  }
`


export { TestimonialFlower, TestimonialContainer, Testimony, Image, Div, H2 };