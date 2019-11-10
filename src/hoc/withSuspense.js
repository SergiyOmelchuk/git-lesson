import React from "react";
import TextPreloader from "../components/common/Preloader/TextPreloader";


export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<TextPreloader />}>
            <Component {...props}/>
        </React.Suspense>
    }
}
