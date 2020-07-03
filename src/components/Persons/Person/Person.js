import React, { Component, Fragment } from "react";
import Auxiliary from "../../../hoc/Auxiliary";
import classes from "./Person.css";

class Person extends Component {
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

export default Person;
