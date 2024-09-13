import React, { useState } from "react";
import { HeaderContainer, Div, Ol, List, ListContainer } from "./Header.style";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { media } from "../../Styled-components/MediaQuery";

const Header = () => {
    const [isAsideBarOpen, setIsAsideBarOpen] = useState(false);
    
    return (
        <HeaderContainer>
            <Div>
                <h2>NGO</h2>
                <GiHamburgerMenu onClick={() => setIsAsideBarOpen(true)} className="hamburgerMenu"/>
                <Ol className={isAsideBarOpen && "asideBarIsOpen"}>
                    <IoClose onClick={() => setIsAsideBarOpen(false)} className="closeAsideBar"/>
                    <ListContainer>
                        <List><Link to="">Home</Link></List>
                        <List><Link to="">About</Link></List>
                        <List><Link to="">Contact</Link></List>
                        <List><Link to="">Our Work</Link></List>
                    </ListContainer>
                </Ol>
            </Div>
        </HeaderContainer>
    )
};

export default React.memo(Header);