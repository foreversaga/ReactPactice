import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Person from './Person/Person'
import UserInput from './Homework/UserInput'
import UserOutput from './Homework/UserOutput'

const app = props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [personState, setPersonState] = useState({
        persons: [
            {name: 'Barry', age: 34},
            {name: 'Evonne', age: 34},
            {name: 'Baby', age: 0.5}
        ]
    });
    const SwitchNameHandler = (newName) => {
        setPersonState({
            persons: [
                {name: newName, age: 34},
                {name: 'Evonne Chung', age: 34},
                {name: 'Baby Chiu', age: 0.5}
            ]
        })
    }

    const nameChangeHandler = (event) => {
        setPersonState({
            persons: [
                {name: 'Barry', age: 34},
                {name: 'Evonne', age: 34},
                {name: event.target.value, age: 0.5}
            ]
        })
    }

    const style = {
        border: '1px solid blue'
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputState, setInputState] = useState({
        value: 'Your Name',
        newValue: ''
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [outState, setOutState] = useState({
        oldValue: '',
        newValue: ''
    });


    const inputHandler = (event) => {
        setInputState({
            value: event.target.value,
        });
        setOutState({
            oldValue: outState.oldValue,
            newValue: event.target.value,
        });
    }
    const outHandler = () => {
        setOutState({
            oldValue: outState.newValue,
            newValue: inputState.value,
        });
    }

    return (
        <div className="App">
            <h1 className="mr-auto">Welcome</h1>
            {/*<button style={style} onClick={SwitchNameHandler.bind(this, 'Barry Chiu')}>Switch Name</button>*/}
            {/*<Person name={personState.persons[0].name} age={personState.persons[0].age}/>*/}
            {/*<Person click={SwitchNameHandler.bind(this, 'Evonne Chung')} name={personState.persons[1].name}*/}
            {/*        age={personState.persons[1].age}/>*/}
            {/*<Person change={nameChangeHandler} name={personState.persons[2].name} age={personState.persons[2].age}/>*/}
            <UserInput click={outHandler} change={inputHandler} input={inputState.value}/>
            <UserOutput oName={outState.oldValue} nName={outState.newValue}/>
        </div>
    )

}


export default app;
