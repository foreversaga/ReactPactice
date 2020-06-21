import React, {Component, PureComponent, useEffect} from "react";
import Person from "./Person";
class Persons extends PureComponent {

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if (nextProps.persons !== this.props.persons) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    render() {
        console.log("rendering persons...");
        return this.props.persons.map((person, index) => {
            return <Person click={() => this.props.clicked(index)} name={person.name}
                           age={person.age} key={person.id} id={person.id}
                           changed={(event) => this.props.changed(event, person.id)}
                           isAuth={this.props.isAuthenticated}/>
        });
    }
}

export default Persons