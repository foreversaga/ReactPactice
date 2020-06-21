import React, {Component} from 'react';
import classes from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Validation from './Homework/ValidationComponent'
import CharComp from './Homework/CharComponent'
import AccessOutput from './Homework/AccessOutPut'
import Persons from "./Person/Persons";
import Cockpit from "./Cockpit/Cockpit"
import HocAux from "./Hoc/HocAux"
import withClass from "./Hoc/withClass";
import AuthContext from "./context/auth-context"

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
        texts: [],
        showCockpit: true,
        changedCounter: 0,
        authenticated: false
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        // persons.splice(personIndex, 1);
        if (persons.length !== this.state.persons.length) {
            this.setState({
                persons: persons
            });
        }
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })
        const person = {...this.state.persons[personIndex]};
        if (person.name !== event.target.value) {
            person.name = event.target.value;
            const persons = [...this.state.persons];
            persons[personIndex] = person;
            this.setState((prevState, props) => {
                return {
                    persons: persons,
                    changedCounter: prevState.changedCounter + 1
                }
            })
        }
    }


    togglePersonHandler = (event) => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }
    style = {
        border: '1px solid blue',
        margin: '5px',
        ':hover': {
            border: '1px solid red'
        }
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

    cockpitBtn = () => {
        this.setState({
            showCockpit: !this.state.showCockpit
        })
    }

    loginHandler = () => {
        this.setState({authenticated: true});
    }

    render() {
        let person = null;
        let cockpit = null;
        if (this.state.showPersons) {
            person = (
                <div>
                    <Persons persons={this.state.persons}
                             clicked={this.deletePersonHandler}
                             changed={this.nameChangeHandler}
                             cockpit={this.state.showCockpit}/>
                </div>
            );
        }

        if (this.state.showCockpit) {
            cockpit = (<Cockpit onClick={this.togglePersonHandler}/>)
        }

        return <HocAux className="classes">
            <h1>Welcome</h1>
            {/*<button style={this.style} onClick={this.togglePersonHandler}>Switch Name</button>*/}
            <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
                {person}
                <Validation changed={this.inputTextHandler} inputValue={this.state.inputText}
                            validation={this.state.validation}/>
                {this.state.texts.map((text, index) => {
                    return <CharComp text={text.text} key={index} delete={() => this.charTextHandler(index)}/>
                })}
                <AccessOutput></AccessOutput>
                <button onClick={this.cockpitBtn}>show cockpit</button>
                {cockpit}
            </AuthContext.Provider>
        </HocAux>
    }
}

export default withClass(app, "App");
