import React from "react";
import configureStore from './store/configureStore';
import AppRouter from "./routers/AppRouter";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';


const store = configureStore();
store.dispatch(addExpense({
    description: 'Gas Bill',
    createdAt: 34340400000
}));
store.dispatch(addExpense({
    description: 'Water Bill',
    amount: 4500,
    createdAt: -34340400000
}));

store.dispatch(addExpense({
    description: 'Rent',
    amount: 109500
}));

// store.dispatch(setTextFilter('Water'));

const currentState = store.getState();
const visibleExpenses = getVisibleExpenses(currentState.expenses, currentState.filters);
console.log(visibleExpenses);


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
createRoot(document.getElementById('app')).render(jsx);
