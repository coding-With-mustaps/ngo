import styled from "styled-components";

const Button = styled.button`
    padding: 5px 10px;
    background-color: var(--button-background-color);
    color: var(--font-color);
    font-weight: 400;
    font-size: 1.2rem;
    cursor: pointer;
`

const H2 = styled.h2`
    font-weight: bold;
    font-size: 1.2rem;
    padding: 3px;
    color: black;
    text-transform: capitalize;
`

const Flower = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 30px;
    border-bottom-right-radius: 2rem;
    border-top-left-radius: 2rem;
    z-index: -10;
    background: linear-gradient(to left, var(--flower-color1), var(--flower-color2));
`
export { Button, H2, Flower };