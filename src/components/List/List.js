import React, {useState} from 'react'
import {connect} from "react-redux";
import s from './List.module.css'
import {NavLink, Redirect, Route} from "react-router-dom";
import ListForm from "./ListForm/ListForm";
import {contactFunc} from "../../redux/contact-reducer";
import ListItem from "./ListItem";
import {logFunc} from "../../redux/login-reducer";
import {CSVLink} from "react-csv";
import {Button, MyCustomButton} from "../../utils/utils";


const ListComponent = (props) => {
    const [editForm, redirect] = useState(false);
    const addContact = values => {
        const id = values.id !== null ? values.id : false
        props.contactFunc(values, id)
        redirect(true)
    };
    const logout = () => {
        props.logFunc(false)
    }
    if(!props.login.login){
        return <Redirect to={'/login'} />
    }
    return (
        <React.Fragment>
            <div className={s.header}>
                <div className={s.info}>
                    <p className={s.bannerName}>
                        Hello, {props.login.username}
                    </p>
                    {/*<button className={s.bannerName} onClick={()=>{logout()}}>*/}
                    {/*    Logout*/}
                    {/*</button>*/}
                    <MyCustomButton component={'button'}
                                    textValue={'Logout'}
                                    className={s.bannerName}
                                    onClick={()=>{logout()}}/>
                </div>
                <div className={s.buttons}>
                    {/*<NavLink to={`/new`} className='black-button' onClick={()=>{redirect(false)}}>*/}
                    {/*    New Contact*/}
                    {/*</NavLink>*/}
                    <MyCustomButton component={'a'}
                                    textValue={'New Contact'}
                                    className='black-button'
                                    link={'/new'}
                                    onClick={()=>{redirect(false)}}
                    />

                    <CSVLink className='black-button' data={props.contacts}>
                        Download CSV
                    </CSVLink>
                </div>
            </div>
            {/*<MyCustomButton component={'button'}*/}
            {/*                textValue={'Download CSV'}*/}
            {/*                className='black-button'*/}
            {/*                link={'/new'}*/}
            {/*                submit={true}*/}
            {/*/>*/}
            <div className={s.list}>
                {props.contacts.map(c=>
                    <ListItem contact={c} redirect={redirect}
                              editForm={editForm} key={c.id}
                              addContact={addContact} />
                )}
            </div>
            <Route path={`/new`} render={() => <ListForm redirect={editForm} onSubmit={addContact} />} />
        </React.Fragment>
    )
}


let mapStateToProps = state =>{
    return{
        contacts: state.contact.contacts,
        login: state.login
    }
}

const List = connect(mapStateToProps, {contactFunc, logFunc})
(ListComponent);


export default List