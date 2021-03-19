import {Field, reduxForm} from "redux-form"
import {NavLink, Redirect} from "react-router-dom"
import React from "react"
import {MyCustomButton} from "../../../utils/utils"
import s from "../List.module.css"
import {minLength12, required} from "../../../utils/validators"
import {normalizePhone, renderField} from "../../common/FormsControls"

const ListFormRedux = (props) => {
    const {handleSubmit} = (props)
    if(props.redirect){
        return <Redirect to="/" />
    }
    return (
        <form className='modal' onSubmit={handleSubmit}>
            <Field
                name="username"
                type="text"
                placeholder="Username"
                validate={required}
                component={renderField}
            />
            <Field
                name="phone"
                type="tel"
                placeholder="Phone"
                validate={[required,minLength12]}
                component={renderField}
                normalize={normalizePhone}
            />
            <Field
                name="id"
                component="input"
                type="hidden"
            />
            <MyCustomButton component="button"
                            textValue="Submit"
                            className="button"
                            submit={true}
            />
            <NavLink to="/" className={s.close}>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.75 1.275C31.775 0.300003 30.2 0.300003 29.225 1.275L17 13.475L4.77505 1.25C3.80005 0.275003 2.22505 0.275003 1.25005 1.25C0.275049 2.225 0.275049 3.8 1.25005 4.775L13.475 17L1.25005 29.225C0.275049 30.2 0.275049 31.775 1.25005 32.75C2.22505 33.725 3.80005 33.725 4.77505 32.75L17 20.525L29.225 32.75C30.2 33.725 31.775 33.725 32.75 32.75C33.725 31.775 33.725 30.2 32.75 29.225L20.525 17L32.75 4.775C33.7001 3.825 33.7001 2.225 32.75 1.275Z" fill="black"/>
                </svg>
            </NavLink>
        </form>
    )
}


const ListForm = reduxForm ({
    form: "listForm",
    enableReinitialize : false,
}) (ListFormRedux)

export default ListForm