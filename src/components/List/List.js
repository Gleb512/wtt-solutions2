import React, { useState} from "react"
import {connect} from "react-redux"
import s from "./List.module.css"
import {Redirect, Route} from "react-router-dom"
import ListForm from "./ListForm/ListForm"
import {contactFunc} from "../../redux/contact-reducer"
import ListItem from "./ListItem"
import {logFunc} from "../../redux/login-reducer"
import { downloadCSV, MyCustomButton } from "../../utils/utils"


const ListComponent = (props) => {
    const [editForm, redirect] = useState(false);
    const addContact = values => {
        const id = values.id !== null ? values.id : false
        props.contactFunc(values, id)
        console.log(true)
        redirect(true)
    };
    const logout = () => {
        props.logFunc(false)
    }
    if(!props.login.login){
        return <Redirect to="/login" />
    }
    return (
        <React.Fragment>
            <div className={s.header}>
                <div className={s.info}>
                    <p className={s.bannerName}>
                        Hello, {props.login.username}
                    </p>
                    <MyCustomButton component="button"
                                    textValue="Logout"
                                    className={s.bannerName}
                                    onClick={()=>{logout()}}/>
                </div>
                <div className={s.buttons}>
                    <MyCustomButton component="NavLink"
                                    textValue="New Contact"
                                    className="black-button"
                                    link="/new"
                                    onClick={()=>{redirect(false)}}
                    />

                    <button className="black-button" onClick={()=>{downloadCSV(props.contacts)}}>
                        Download CSV
                    </button>
                </div>
            </div>
            <div className={s.list}>
                {props.contacts.map(c=>
                    <ListItem contact={c} redirect={redirect}
                              editForm={editForm} key={c.id}
                              addContact={addContact} />
                )}
            </div>
            <Route path="/new" render={() => <ListForm redirect={editForm} onSubmit={addContact} />} />
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
(ListComponent)


export default List