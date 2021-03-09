import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "../pages/SingIn";
import SignUp from "../pages/SingUp";
import Dashboard from "../pages/Dashboard";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" component={SignUp} />

            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    );
}

// <Route path="/profile" component={Profile} isPrivate />
