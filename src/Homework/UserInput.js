import React from 'react'

const userInput = (props) => {
    return <div>
        <label>Please insert your name</label>
        <input type="text" value={props.input} onChange={props.change}/>
        <button onClick={props.click}>按我</button>
    </div>
}

export default userInput