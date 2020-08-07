import React from 'react';
import { HomeDefault, Login, Register, History, Forgot, Shortener } from './pages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './style/main.scss';
import { AuthUserProvider } from './providers/auth-user-provider';

const App = () => {
    return (
        <AuthUserProvider>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <HomeDefault />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/history">
                        <History />
                    </Route>
                    <Route path="/forgot">
                        <Forgot />
                    </Route>
                    <Route path="*" component={Shortener}/>
                </Switch>
            </Router>
        </AuthUserProvider>
    )
}

export default App;