import React from "react"
import {NavLink} from "react-router-dom"

// Update Contact helper
export function updateContactFunc(array, id, values){
    array[array.findIndex(arr => arr.id === id)] = {
        ...array[array.findIndex(arr => arr.id === id)],
        ...values
    }
    return array
}




// Custom Button Component Implemented
// The examples of usage with different
// tags are in ListComponent (List.js), ListFormRedux (ListForm.js)
export const MyCustomButton = (props) => {
    const state = {
        component: props.component === "NavLink" ? NavLink : props.component,
        textValue: props.textValue && props.textValue,
        className: props.className && props.className,
        link: props.link && props.link,
        submit: props.submit & props.submit,
        type: props.submit ? "submit" : "",
        onClick: props.onClick,
    }

    return (
        <>
            <state.component
                className={state.className}
                href={state.link}
                to={state.link}
                type={state.type}
                label={state.type}
                onClick={state.onClick}
            >
                {state.textValue}
            </state.component>
        </>
    )
}


//Hide ReduxForm Old Lifecycle warnings in App.js
const error = console.error
export function logError(...parameters) {
    let filter = parameters.find(parameter => {
        return (
            parameter.includes("Warning: %s is deprecated in StrictMode")
            || parameter.includes("Warning:")
        );
    });
    if(!filter) error(...parameters)
}




export function downloadCSV(arr) {
    const array = [Object.keys(arr[0])].concat(arr)
    const csvContent = array.map(row => {
        return Object.values(row).map(value => {
            return typeof value === "string" ? JSON.stringify(value) : value
        }).toString()
    }).join("\n")

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a")
    link.setAttribute("href", "data:text/csv;charset=utf-8," + encodedUri)
    link.setAttribute("download", "contacts.csv")
    document.body.appendChild(link)
    link.click()
}