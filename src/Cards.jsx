// cards.jsx---simpilify---1--removed img tag and create a another component



import React from "react";
import Imaages from "./Imaages";

function Card(props) {
    console.log(props)
    return (
        <div className="cards">
            <div className="card">
                <div className="card_info">
                    <Imaages imgsrc={props.imagesrc} />
                    <span className="card_category">{props.sname}</span>
                    <h3 className="card_title">{props.title}</h3>
                    <a href={props.link} target="_blank">
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </div>

    );
}


export default Card;