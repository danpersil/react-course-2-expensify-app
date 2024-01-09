import React from "react";
import configureStore from './store/configureStore';
import AppRouter from "./routers/AppRouter";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { startSetExpenses } from './actions/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// createRoot(<p>Loading ...</p>).render(jsx);

store.dispatch(startSetExpenses()).then(()=> {
    createRoot(document.getElementById('app')).render(jsx);
});
