import React from "react";
import { GoalsFlower } from "./Goals.style";
import { HeadingTwo } from "../Work/Work.style";

const Goals = () => {

    return (
        <div>
            <HeadingTwo>
                Goals
                <GoalsFlower />
            </HeadingTwo>
        </div>
    )
};

export default React.memo(Goals);