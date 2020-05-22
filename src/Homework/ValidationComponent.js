import React from "react";

const validation = (props) => {
    return <div>
        <input onChange={props.changed} value={props.inputValue}/>
        <p>{props.validation}</p>
    </div>
};

export default validation