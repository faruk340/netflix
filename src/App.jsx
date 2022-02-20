

// App.jax component simplify----- 6


import React from "react";
import Amazon from "./Amazon";
import Netflix from "./Netflix";


const favseries = "amazon";
// const Choice = () => {
//     if (favseries === "netflix") {
//         return (
//             <Netflix />
//         );

//     } else {
//         return (
//             <Amazon />
//         );
//     }
// }

const App = () => {
    return (
        <>
            <h1 className="heading-style">list of top 5 netflis series</h1>

            <div className="box-wraper">

                {(favseries === "netflix") ? <Netflix /> : <Amazon />}
            </div>
        </>
    );
}

export default App;