import {Field, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import React from "react";
import {MyCustomButton} from "../../../utils/utils";

const ListFormRedux = (props) => {
    const {handleSubmit} = (props);
    if(props.redirect){
        return <Redirect to={`/`} />
    }
    return (
        <form className='modal' onSubmit={handleSubmit}>
            <Field
                name="username"
                component='input'
                type="text"
                placeholder="Username"
            />
            <Field
                name="phone"
                component='input'
                type="tel"
                placeholder="Phone"
            />
            <Field
                name="id"
                component='input'
                type="hidden"
            />
            <MyCustomButton component={'button'}
                            textValue={'Submit'}
                            className='button'
                            submit={true}
            />
        </form>
    )
}


const ListForm = reduxForm ({
    form: 'listForm',
    enableReinitialize : false,
}) (ListFormRedux)

export default ListForm