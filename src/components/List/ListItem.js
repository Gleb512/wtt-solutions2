import React, {useEffect, useState} from 'react'
import {NavLink, Route} from "react-router-dom";
import ListForm from "./ListForm/ListForm";
import s from './List.module.css'
import axios from "axios";

const ListItem = (props) => {
    const [loading, show] = useState(true);
    const [image, setImage] = useState(null);
    useEffect( ()=>{
        if(props.contact){
            axios.get(props.contact.img)
                .then(function(result) {
                    setImage(result.request.responseURL)
                    show(false)
                })
        }
    }, [props])
    if(loading){
        return <h1>Loading</h1>
    }
    return (
        <div className={s.item} key={props.contact.id}>
            <NavLink to={`/${props.contact.id}/edit`} className={s.editBtn} onClick={()=>{props.redirect(false)}}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 11.46V14.5C0 14.78 0.22 15 0.5 15H3.54C3.67 15 3.8 14.95 3.89 14.85L14.81 3.94L11.06 0.19L0.15 11.1C0.0500001 11.2 0 11.32 0 11.46Z" fill="black"/>
                </svg>
            </NavLink>
            <img src={image} alt={'s.name'} />
            <p className={s.name}>{props.contact.username}</p>
            <a className={s.call} href={`tel:`+props.contact.phone}>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.63 11.4L11.11 13.9C8.61002 12.47 6.54002 10.4 5.11002 7.9L7.61002 5.38C7.84002 5.14 7.94002 4.81 7.88002 4.48L7.13002 0.8C7.04002 0.34 6.63002 0 6.15002 0H2.00002C1.44002 0 0.970019 0.47 1.00002 1.03C1.17002 3.92 2.05002 6.63 3.43002 9C5.01002 11.73 7.28002 13.99 10 15.57C12.37 16.94 15.08 17.83 17.97 18C18.53 18.03 19 17.56 19 17V12.85C19 12.37 18.66 11.96 18.2 11.87L14.53 11.14C14.2 11.07 13.86 11.17 13.63 11.4Z" fill="white"/>
                </svg>
            </a>
            <Route path={`/${props.contact.id}/edit`} render={() => <ListForm redirect={props.editForm}
                                                                         initialValues={props.contact}
                                                                         contact={props.contact}
                                                                         onSubmit={props.addContact} />} />
        </div>
    )
}

export default ListItem