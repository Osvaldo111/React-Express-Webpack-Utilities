import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import store from "../reducers/store";
Enzyme.configure({ adapter: new Adapter() });

describe("App validetion <App />", () => {
  it("Renders without crashing", () => {
    // Using enzyme
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);

    /**Mounting the component */
    // const div = document.createElement("div");
    // ReactDOM.render(
    //   <Provider store={store}>
    //     <App />
    //   </Provider>,
    //   div
    // );
  });

  it("Check the alert funcitonality", () => {});
});
