import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List </h1>
        {props.expenses.length === 0 && <p>No expenses</p>}
        {props.expenses.map((expense) => (
            <ExpenseListItem {...expense} key={expense.id} />
        ))}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
        filters: state.filters
    };
};

//Created a connection to the store, but it is still using the ExpenseList
//then passing the props to it
//It is the HOC
export default connect(mapStateToProps)(ExpenseList);



