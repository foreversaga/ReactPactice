import React, {Component} from 'react';
import withClass from "../Hoc/withClass";
class person extends Component {
    render() {
        return <div onClick={this.props.click}>
            <p>I'm {this.props.name} and I am {this.props.age} years old!</p>
            <input onChange={this.props.changed} value={this.props.name}/>
        </div>
    }
};

export default person;