import React from "react";
import { shallow } from "enzyme";
import Layout from "./Layout";

describe("Layout component", () => {
    it("should render children prop", () => {
        const wrapper = shallow(
            <Layout>
                <p>test content</p>
            </Layout>
        );
        expect(wrapper.contains(<p>test content</p>)).toBe(true);
    });

    it("should have main element with class 'main'", () => {
        const wrapper = shallow(<Layout />);
        expect(wrapper.find("main").hasClass("main")).toBe(true);
    });
});
