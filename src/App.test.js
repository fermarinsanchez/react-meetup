/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import App from "./App";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";


/**
 * Factory funcion to create a ShallowWrapper for the App component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

test("renders App without crashing", () => {
  const wrapper = setup();
  expect(wrapper.exists()).toBe(true);
});

test("renders the navigation component", () => {
  const wrapper = setup();
  expect(wrapper.find(MainNavigation).length).toBe(1);
});

test("renders the Layout component", () => {
  const wrapper = setup();
  expect(wrapper.find(Layout).length).toBe(1);
});

test("renders the Redux Provider component", () => {
  const wrapper = setup();
  expect(wrapper.find(Provider).length).toBe(1);
});

test("renders the React Router DOM Routes and Route components", () => {
  const wrapper = setup();
  expect(wrapper.find(Routes).length).toBe(1);
  expect(wrapper.find(Route).length).toBe(4);
});
