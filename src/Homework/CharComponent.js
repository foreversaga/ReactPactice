import React from "react";
import Radium from "radium";

const style = {
    border: '1px solid black',
    margin: '10px',
    padding: '10px',
    width: '30px',
    display: 'inline-block',
    ':hover': {
        backgroundColor: 'red',
        border: '1px solid black',

    }
}
const charCom = (props) => {
    return <p style={style} onClick={props.delete}>{props.text}</p>
};

export default Radium(charCom);