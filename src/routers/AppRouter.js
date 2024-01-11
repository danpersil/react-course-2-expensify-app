import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpensiveDashboardPage from '../components/ExpensiveDashboardPage';
import HelpPage from '../components/HelpPage';
import Header from "../components/Header";
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from "../components/LoginPage";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path='/dashboard' component={ExpensiveDashboardPage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>

    </BrowserRouter>
);

export default AppRouter;
