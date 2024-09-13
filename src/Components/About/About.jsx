import React from "react";
import { HeadingTwo, AboutFlower } from "./About.style";

const About = () => {

    return (
        <div>
            <HeadingTwo>
                About
                <AboutFlower />
            </HeadingTwo>
            
        </div>
    )
};

export default React.memo(About);