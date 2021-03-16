import React from 'react'
import {connect} from "react-redux";
import s from './Login.module.css'
import LoginForm from "./LoginForm";
import {logFunc} from "../../redux/login-reducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const submit = values => {
        if(values.username){
            props.logFunc(true, values.username)
        }
    };
    if(props.login.login){
        return <Redirect to={'/'} />
    }
    return (
        <div className={s.login}>
            <h1>SignIn</h1>
            <LoginForm onSubmit={submit} />
        </div>
    )
}



let mapStateToProps = state =>{
    return{
        login: state.login
    }
}

const LoginContainer = connect(mapStateToProps, {logFunc})
(Login);


export default LoginContainer