import React from "react";
import { Link } from "react-router-dom";
import { FooterContainer, Div, LastDiv, Input, Form, SubmitButton } from "./Footer.style";
import { BsYoutube } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Li } from "../../Styled-components/List.style";


const Footer = () => {

    const date = new Date();

    return(
        <FooterContainer>
            <Div>
                <div>
                    <h3>NGO LOGO</h3>
                    <p>Wisdom of life, an NGO WordPress theme with 2.5k+ sales and      advanced features available for purchase at
                    </p>
                </div>
                <div>
                    <h3>Out work</h3>
                    <ol>
                        <Li>our work</Li>
                        <Li>feeding for education</Li>
                        <Li>our work</Li>
                        <Li>feeding for education</Li>
                    </ol>
                </div>
                <div>
                    <h3>Donate</h3>
                    <ol>
                        <Li>donate online</Li>
                        <Li>sponsor schools</Li>
                        <Li>sponsor kitchen</Li>
                    </ol>
                </div>
                <div>
                    <h3>Get in touch</h3>
                    <div>
                        <p>Subscribe for daily News</p>
                        <Form>
                            <Input 
                                type="text"
                                placeholder="Email"
                            />
                            <SubmitButton>send</SubmitButton>
                        </Form>
                    </div>
                </div>
            </Div>
            <LastDiv>
                <p>© Copyright {date.getFullYear()} by law...</p>
                <ol>
                    <Li><Link to="/"><BsYoutube className="socialMediaIcons" /></Link></Li>
                    <Li><Link to=""><FaFacebook className="socialMediaIcons" /></Link></Li>
                    <Li><Link to=""><FaTelegram className="socialMediaIcons" /></Link></Li>
                    <Li><Link to=""><FaXTwitter className="socialMediaIcons" /></Link></Li>
                </ol>
            </LastDiv> 
        </FooterContainer>
    )
};

export default React.memo(Footer);

