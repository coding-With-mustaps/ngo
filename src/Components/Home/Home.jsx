import React from "react";
import { ButtonLink, Div, HomeContainer, Paragraph } from "./Home.style";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Work from "../Work/Work";
import Vision from "../Vision/Vision";
import Achievement from "../Achievement/Achievement";
import Goals from "../Goals/Goals";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {

    return (
        <>  
            <Header />
            <HomeContainer>
                <div>
                    <Div>
                        <Paragraph>
                            Give 2.2 million children the <br /> 
                            Gift of good childhood and <br /> 
                            bright future
                        </Paragraph>
                    </Div>
                    <ButtonLink>Donate now</ButtonLink>
                </div>
            </HomeContainer>
            <About />
            <Work />
            <Vision />
            <Achievement />
            <Goals />
            <Testimonial />
            <Footer />
        </>
    )
};

export default React.memo(Home);