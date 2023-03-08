import React from "react";

const Scroll = (props) => {
    return (
        <div style={{ overflowY: "scroll", height: "500px", margin: "10px" }}>
            {props.children}
        </div>
    );
}

export default Scroll;