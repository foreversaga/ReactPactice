import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Person from './Person/Person'
import Validation from './Homework/ValidationComponent'
import CharComp from './Homework/CharComponent'

class app extends Component {
    state = {
        persons: [
            {id: '1', name: 'Barry', age: 34},
            {id: '2', name: 'Evonne', age: 34},
            {id: '3', name: 'Baby', age: 0.5}
        ],
        showPersons: false,
        inputText: '',
        validation: '',
        texts: []
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
        border: '1px solid blue',
        margin: '5px'
    }

    inputTextHandler = (event) => {
        let textArray = [];
        let validation = '';
        this.setState({
            inputText: event.target.value
        }, () => {
            let input = this.state.inputText;
            let textArray = input.split('');
            let texts = []
            for (let i = 0; i < textArray.length; i++) {
                texts.push({id: i, text: textArray[i]})
            }
            if (input.length > 5) {
                validation = 'Text too long.'
            } else if (input.length < 5) {
                validation = 'Text too short.'
            } else {
                validation = ''
            }
            this.setState({
                validation: validation,
                texts: texts
            })
        });


    }

    charTextHandler = (id) => {
        let inputText = '';
        let textArray = this.state.texts.slice();
        let texts = [];
        textArray.splice(id, 1);
        for (let i = 0; i < textArray.length; i++) {
            texts.push({id: i, text: textArray[i].text});
            inputText += textArray[i].text;
        }
        this.setState({
            inputText: inputText,
            texts: texts
        })
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
            <Validation changed={this.inputTextHandler} inputValue={this.state.inputText}
                        validation={this.state.validation}/>
            {this.state.texts.map((text, index) => {
                return <CharComp text={text.text} key={index} delete={() => this.charTextHandler(index)}/>
            })}
        </div>
    }
}

export default app;
