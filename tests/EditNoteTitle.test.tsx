import React from "react";
import { render } from "@testing-library/react-native";
import EditNoteTitle from "../components/edit_note_title";

describe("EditNoteTitle component", () => {
  it("renders correctly with initial text", () => {
    const { getByTestId } = render(<EditNoteTitle initialText="Test Title" />);
    const inputElement = getByTestId("edit-note-title-input");
    expect(inputElement.props.value).toBe("Test Title");
  });

  it("renders correctly without initial text", () => {
    const { getByTestId } = render(<EditNoteTitle />);
    const inputElement = getByTestId("edit-note-title-input");
    expect(inputElement.props.value).toBe("");
  });

  it("matches snapshot", () => {
    const { toJSON } = render(<EditNoteTitle initialText="Snapshot Test" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
