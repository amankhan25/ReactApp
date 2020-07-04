import React, { Component, Fragment } from "react";
import Auxiliary from "../../../hoc/Auxiliary";
import classes from "./Person.css";
import propTypes from "prop-types";
import Persons from "../Persons";
import withClass from "../../../hoc/withClass";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }
  render() {
    console.log("[Person.js] rendering...");
    // const rnd = Math.random();
    // if (rnd > 0.7){
    //   throw new Error('SomeThing went wrong');
    // }
    return (
      //<div className={classes.Person}>
      //<Auxiliary>
      <Fragment>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          // ref={(inputEl) => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
      //</Auxiliary>
      //</div>
    );
  }
}
Person.propTypes = {
  click: propTypes.func,
  name: propTypes.string,
  age: propTypes.number,
  changed: propTypes.func,
};

export default withClass(Person, classes.Person);
