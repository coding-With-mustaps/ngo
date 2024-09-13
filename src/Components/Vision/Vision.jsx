import React from "react";
import { VisionFlower } from "./Vision.style";
import { HeadingTwo } from "../Work/Work.style";

const Vision = () => {

    return (
        <div>
            <HeadingTwo>
                Vision
                <VisionFlower />
            </HeadingTwo>
        </div>
    )
};

export default React.memo(Vision);