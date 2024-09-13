import React from "react";
import { HeadingTwo } from "../Work/Work.style";
import { TestimonialContainer, H2, TestimonialFlower, Image, Testimony, Div } from "./Testimonial.style";

import image1 from "../../Assets/t1.jpeg";
import image2 from "../../Assets/t2.jpeg";
import image3 from "../../Assets/t3.jpeg";
import image4 from "../../Assets/t4.jpeg";
import image5 from "../../Assets/t5.jpeg";

const imageArray = [
    {
        id: 1,
        image: image1,
        testimony: "Their unwavering commitment to making a positive impact in underserved communities is truly inspiring...",
    },
    {
        id: 2,
        image: image2,
        testimony: "Their unwavering commitment to making a positive impact in underserved communities is truly inspiring...",
    },
    {
        id: 3,
        image: image3,
        testimony: "Their unwavering commitment to making a positive impact in underserved communities is truly inspiring...",
    },
    {
        id: 4,
        image: image4,
        testimony: "Their unwavering commitment to making a positive impact in underserved communities is truly inspiring...",
    },
    {
        id: 5,
        image: image5,
        testimony: "Their unwavering commitment to making a positive impact in underserved communities is truly inspiring...",
    }
];

const Testimonial  = () => {

    

    return (
        <TestimonialContainer>
            <H2>Testimonial</H2>

            <Div>
                { imageArray.map( test => (
                    <Testimony key={test.id}>
                        <Image src={test.image} alt="" />
                        <p>{test.testimony}</p>
                    </Testimony>
                ))}
            </Div>
        </TestimonialContainer>
    )
};

export default React.memo(Testimonial);