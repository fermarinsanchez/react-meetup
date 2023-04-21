/* eslint-disable testing-library/no-debugging-utils */
import { Provider } from "react-redux";
import store from "../../store/index";
import { shallow } from "enzyme";
import MeetupItem from "./MeetupItem";

test("<MeetupItem/> renders without crashing", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <MeetupItem />
    </Provider>
  );
  expect(wrapper.exists()).toBe(true);
});
