import React from "react"
import {Route, Switch} from "react-router-dom"
import List from "./List/List"
import LoginContainer from "./Login/Login"

const Content = () => {
    return (
        <Switch>
            <Route path="/login" render={() => <LoginContainer /> } />
            <Route path="/" render={() => <List /> } />
        </Switch>
    )
}



export default Content