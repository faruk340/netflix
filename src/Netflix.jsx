import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";



const Netflix = () => {
    return (
        <Card
            key={Sdata[3].id}
            imagesrc={Sdata[3].imgsrc}
            title={Sdata[3].title}
            sname={Sdata[3].sname}
            link={Sdata[3].link}
        />);
}


export default Netflix;