import React from "react";
import { shallow } from "enzyme";
import { ExpenseSummary } from "../../components/ExpensesSummary";

test('should correctly render expensesSummary with one expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render expensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={1654651} />);
    expect(wrapper).toMatchSnapshot();
});