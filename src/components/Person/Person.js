import React from "react"
import "./Person.css"

const Person = (props) => {
    return (
        <div className="person">
            <p onClick={props.click}> This is a {props.name}. Im {props.age}</p>
            <input type="text" onChange={props.change} value={props.name}></input>
        </div>
    );
}

export default Person