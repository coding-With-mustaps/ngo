import { createContext, useEffect, useState } from "react"
import { sizesNum } from "../../Styled-components/MediaQuery";

const viewportContext = createContext();

const ViewportContextProvider = (props) => {
   
    console.log(sizesNum.mobile)
    const [isMobileView, setIsMobileView] = useState(window.innerHeight <= sizesNum.mobile ? true : false);
    
    // console.log(isMobileView);
    console.log("hey", window.innerHeight)

    return (
        <viewportContext.Provider value={{}}>
            {props.children}
        </viewportContext.Provider>
    )
};


export { viewportContext, ViewportContextProvider };