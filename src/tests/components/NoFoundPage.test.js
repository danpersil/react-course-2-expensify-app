import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../../components/NotFoundPage";

test('Should render NotFoundPage corretly', () => {
    const wrapper = shallow(< NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});