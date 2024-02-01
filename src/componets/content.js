import React from "react";
import "../style/content.css"


function Content({ numClick }) {
    return (
        <div className="content">
            { numClick }
        </div>
    )
}

export default Content;