import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Person from './Person/Person'

class app extends Component {
    state = {
        persons: [
            {id: '1', name: 'Barry', age: 34},
            {id: '2', name: 'Evonne', age: 34},
            {id: '3', name: 'Baby', age: 0.5}
        ],
        showPersons: false
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        // persons.splice(personIndex, 1);
        this.setState({
            persons: persons
        });
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({
            persons: persons
        })
    }


    togglePersonHandler = (event) => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }
    style = {
        border: '1px solid blue'
    }

    render() {
        let person = null;
        if (this.state.showPersons) {
            person = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person click={() => this.deletePersonHandler(index)} name={person.name}
                                       age={person.age} key={person.id}
                                       changed={(event) => this.nameChangeHandler(event, person.id)}/>
                    })}
                </div>
            )
        }
        return <div className="App">
            <h1 className="mr-auto">Welcome</h1>
            <button style={this.style} onClick={this.togglePersonHandler}>Switch Name</button>
            {person}
        </div>
    }
}

export default app;
