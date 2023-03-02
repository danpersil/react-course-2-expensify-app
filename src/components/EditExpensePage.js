import React from "react";
import { connect } from "react-redux";
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onRemoveExpense = () => {
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit} />
                <button onClick={this.onRemoveExpense}>Remove</button>
            </div>
        );
    };
};

// const EditExpensePage = (props) => {
//     return (
//         <div>
//             <ExpenseForm
//                 expense={props.expense}
//                 onSubmit={
//                     (expense) => {
//                         props.dispatch(editExpense(expense.id, expense));
//                         props.history.push('/');
//                     }
//                 }
//             />
//             <button onClick={() => {
//                 props.dispatch(removeExpense({ id: props.match.params.id }));
//                 props.history.push('/');
//             }}>Remove</button>
//         </div>
//     );
// };

const mapStateToProps = (state, props) =>
    ({ expense: state.expenses.find((expense) => expense.id === props.match.params.id) });

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);