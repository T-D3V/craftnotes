import React from "react";
import { render } from "@testing-library/react-native";
import EditNoteText from "../components/edit_note_text";

describe("EditNoteText component", () => {
  it("renders correctly with initial text", () => {
    const { getByTestId } = render(<EditNoteText initialText="Test Text" />);
    const inputElement = getByTestId("edit-note-text-input");
    expect(inputElement.props.value).toBe("Test Text");
  });

  it("renders correctly without initial text", () => {
    const { getByTestId } = render(<EditNoteText />);
    const inputElement = getByTestId("edit-note-text-input");
    expect(inputElement.props.value).toBe("");
  });

  it("matches snapshot", () => {
    const { toJSON } = render(<EditNoteText initialText="Snapshot Test" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
