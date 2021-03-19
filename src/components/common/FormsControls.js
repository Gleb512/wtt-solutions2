import React from "react"
import s from "./FormsControls.module.css"
export const renderField = ({ input, label, placeholder, type, meta: { touched, error, warning } }) => {
    return(
        <div>
            <label>{label}</label>
            <div>
                <input {...input} placeholder={placeholder ? placeholder : label} type={type}/>
                {touched && ((error && <span className={s.error}>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    )
}




export const normalizePhone = (value, previousValue) => {
    if (!value) {
        return value
    }
    const onlyNums = value.replace(/[^\d]/g, "")
    if (!previousValue || value.length > previousValue.length) {
        // typing forward
        if (onlyNums.length === 3) {
            return onlyNums + "-"
        }
        if (onlyNums.length === 6) {
            return onlyNums.slice(0, 3) + "-" + onlyNums.slice(3) + "-"
        }
    }
    if (onlyNums.length <= 3) {
        return onlyNums
    }
    if (onlyNums.length <= 6) {
        return onlyNums.slice(0, 3) + "-" + onlyNums.slice(3)
    }
    return onlyNums.slice(0, 3) + "-" + onlyNums.slice(3, 6) + "-" + onlyNums.slice(6, 10)
}
