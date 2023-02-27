import React from "react";
import { shallow } from "enzyme";
import ExpensiveDashboardPage from "../../components/ExpensiveDashboardPage";

test('Should render ExpenseDashboardPage corretly', () => {
    const wrapper = shallow(< ExpensiveDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});