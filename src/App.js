import React, { Component } from "react";
//import React, { useState } from "react";
import "./App.css";
//import Radium, {StyleRoot}  from 'radium';
import Person from "./Person/Person";
import Styled from "styled-components";

const StyledButton = Styled.button`
background-color: ${props => props.alt ? 'red' : 'green'};
color: white;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;
&:hover {
    background-color : ${props => props.alt ? 'salmon' : 'lightgreen'};
    color : black;
}
`

//class based
class App extends Component {
    state = {
        persons: [
            {name:"Max", age:"28"},
            {name:"Manu", age:"29"},
            {name:"Stephanie", age:"26"}
        ],
        otherStates: "otherValues",
        showPersons: false
    }

    // switchNameHandler = (newName,newAge) => {
    //     this.setState({persons: [
    //         {name: newName, age:"28"},
    //         {name:"Manu", age:"29"},
    //         {name:"Stephanie", age:newAge}
    //     ]})
    // }

    deletePersonHandler = (personIndex) => {
       // const persons = this.state.persons.slice; // copy array
       const persons = [...this.state.persons]; //modern copy array
        persons.splice(personIndex,1);
        this.setState({persons: persons});
    }

    nameChangedHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex(pIndex => {
            return pIndex.id === id
        });

        const person = {...this.state.persons[personIndex]};

        //const person = Object.assign({}, this.state.persons[personIndex]); // alternative approach

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons})
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})

    }
    render() {
        const style = {
            
        }
        let persons = null;

        if(this.state.showPersons){
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person 
                                            click={() => this.deletePersonHandler(index)}
                                            name={person.name}
                                            age={person.age}
                                            key={person.id}
                                            changed={(event) => this.nameChangedHandler(event, person.id)}
                                    />       
                        })
                    }
                </div>
            )
            style.backgroundColor = 'red';
            style[':hover']= {
                backgroundColor : 'salmon',
                color : 'black'
            }
        }

        const classes = [];

        if (this.state.persons.length <= 2){
            classes.push('red');
        }

        if (this.state.persons.length <= 1){
            classes.push('bold');
        }

        return (
            
                <div className="App">
                <h1>Hi, I am a react app.</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <StyledButton 
                    // style={style}
                    alt={this.state.showPersons}
                    onClick={this.togglePersonHandler}>Toggle Person
                </StyledButton>
                    {persons}  
            </div>
            
        );
      // return React.createElement('div',{className: "App"}, React.createElement('h1', null ,'This is My text.'))
    }
}

  export default App;