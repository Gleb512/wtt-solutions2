import React from 'react'
import {Field, reduxForm} from "redux-form";
import {MyCustomButton} from "../../utils/utils";

const LoginReduxForm = (props) => {
    const {handleSubmit} = (props);
    return (
        <form className="form" onSubmit={handleSubmit}>
            <Field
                name="username"
                component='input'
                type="text"
                placeholder="What's your name?"
            />
            {/*<button className="button" type="submit" label="submit">*/}
            {/*    Submit*/}
            {/*</button>*/}
            <MyCustomButton component={'button'}
                            textValue={'Submit'}
                            className='button'
                            submit={true}
            />
        </form>
    )
}


const LoginForm = reduxForm ({
    form: 'loginForm',
}) (LoginReduxForm)

export default LoginForm