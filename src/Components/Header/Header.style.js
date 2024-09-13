import styled, { keyframes } from "styled-components";
import { Li } from "../../Styled-components/List.style";
import { media } from "../../Styled-components/MediaQuery";

const HeaderContainer = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    background-color: var(--background-color);
    color: var(--font-color);
    padding: 12px 0;
    z-index: 1000;
`

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    .hamburgerMenu {
        display: none;
        
        @media ${media.mobile} {
            display: block;
            cursor: pointer;
            font-size: 20px;
        }
    }
`

const Ol = styled.ol`
    display: flex;
    justify-content: center;
    align-items:center;

    @media ${media.mobile} {
        flex-direction: column;
        background-color: white;
        color: black;
        height: 70vh;
        width: 70%;
        position: fixed;
        top: 0;
        right: -1200px;
        border-bottom-left-radius: 3px;
        display: none;

        &.asideBarIsOpen {
            right: 0;
            display: block;
            animation: animateOpen 0.5s linear;
        };
    };

    .closeAsideBar {
        display: none;

        @media ${media.mobile} {
            display: block;
            position: absolute;
            top: 10px;
            left: 10px;
            font-size: 25px;
        }
    };

    @keyframes animateOpen {
        from {
            right: -300px;
        }
        to {
            right: 0;
        }
    };
`;

const ListContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    margin-right: 20px;

    @media ${media.mobile} {
        flex-direction: column;
        margin-top: 50px;
    }
    
    
    
`

const List = styled(Li)`
    margin: 0 10px;

    @media ${media.mobile} {
        width: 100%;
        text-align: center; 
        margin: 10px 0;  
    }

    a {
        color: var(--font-color);
        text-decoration: none;
        font-size: 1.3rem;

        @media ${media.mobile} {
            color: black !important;
        }
    }
`

export { HeaderContainer, Div, Ol, List, ListContainer };