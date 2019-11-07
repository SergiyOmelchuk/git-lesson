import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";


describe("BProfileStatus component", () => {
    test("status from props should be in state", () => {
        const component = create(<ProfileStatus status="Status is here"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Status is here");
    });


    test("after creation <input> should not be displayed", () => {
        const component = create(<ProfileStatus status="Status is here"/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow()
    });

    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status="Status is here"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("Status is here");
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="Status is here"/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        debugger
        expect(input.props.value).toBe("Status is here");
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deActivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});

