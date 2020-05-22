import React from "react";

const style = {
    border: '1px solid black',
    margin: '10px',
    padding: '10px',
    width: '30px',
    display: 'inline-block'
}
const charCom = (props) => {
    return <p style={style} onClick={props.delete}>{props.text}</p>
};

export default charCom;