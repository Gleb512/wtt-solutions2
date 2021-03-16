import React from 'react'
import {NavLink} from "react-router-dom";

// Update Contact helper
export function updateContactFunc(array, id, values){
    array[array.findIndex(arr => arr.id === id)].username = values.username
    array[array.findIndex(arr => arr.id === id)].phone = values.phone
    return array
}




// Custom Button Component Implemented
// The examples of usage with different
// tags are in ListComponent (List.js), ListFormRedux (ListForm.js)
export class MyCustomButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            component: this.props.component === 'a' ? NavLink : this.props.component,
            textValue: this.props.textValue && this.props.textValue,
            className: this.props.className && this.props.className,
            link: this.props.link && this.props.link,
            submit: this.props.submit & this.props.submit,
            type: this.props.submit ? 'submit' : '',
            onClick: this.props.onClick
        }
    }

    render() {
        return (
            <>
            <this.state.component
                className={`${this.state.className}`}
                to={this.state.link}
                type={this.state.type}
                label={this.state.type}
                onClick={this.state.onClick}
            >
                    {this.state.textValue}
            </this.state.component>
            </>
        );
    }
}



//Hide ReduxForm Old Lifecycle warnings in App.js
const error = console.error;
export function logError(...parameters) {
    let filter = parameters.find(parameter => {
        return (
            parameter.includes("Warning: %s is deprecated in StrictMode")
            || parameter.includes("Warning:")
        );
    });
    if(!filter) error(...parameters);
}