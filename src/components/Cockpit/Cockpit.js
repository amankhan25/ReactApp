import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    console.log("[App.js] useEffect");
    //HTTPS Request
    // const timer = setTimeout(() => {
    //   alert("Save to the Cloud!");
    // }, 1000);
    toggleButtonRef.current.click();
    return () => {
      //clearTimeout(timer);
      console.log("[Cockpit.js] cleanup work in the useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in the 2nd useEffect");
    };
  });
  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button
        ref={toggleButtonRef}
        className={btnClass}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(cockpit);
