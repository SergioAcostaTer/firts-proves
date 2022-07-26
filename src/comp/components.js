import React, { Component } from "react";

const Welcome = (props) => {
    return <h1>Hello, {props.name}! {props.children}</h1>
}

export default Welcome