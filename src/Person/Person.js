import React, {Component} from 'react';
import withClass from "../Hoc/withClass";
import AuthContext from "../context/auth-context"

class person extends Component {
    render() {
        return <div onClick={this.props.click}>
            <AuthContext.Consumer>
                {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}
            </AuthContext.Consumer>
            <p>I'm {this.props.name} and I am {this.props.age} years old!</p>
            <input onChange={this.props.changed} value={this.props.name}/>
        </div>
    }
};

export default person;