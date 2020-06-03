import React, {Component} from "react";
import Access from "./AccessComponentState";

class Output extends Component {
    state = {
        data: 'Access success'
    }

    render() {
        const a = (
            <p>123</p>
        )
        return <Access data={this.state.data} lists={a}/>
    }
}

export default Output