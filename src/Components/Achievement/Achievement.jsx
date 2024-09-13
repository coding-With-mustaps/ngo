import React from "react";
import { AchievedFlower } from "./Achievement.style";
import { HeadingTwo } from "../Work/Work.style";

const Achievement = () => {

    return (
        <div>
            <HeadingTwo>
                Achievement
                <AchievedFlower />
            </HeadingTwo>
        </div>
    )
};

export default React.memo(Achievement);