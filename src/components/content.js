import React from 'react'
import {Route, Switch} from "react-router-dom";
import List from "./List/List";
import LoginContainer from "./Login/Login";

const Content = () => {
    return (
        <div>
            <div>
                <Switch>
                    <Route path='/login' render={() => <LoginContainer /> } />
                    <Route path='/' render={() => <List /> } />
                </Switch>
            </div>
        </div>
    )
}



export default Content