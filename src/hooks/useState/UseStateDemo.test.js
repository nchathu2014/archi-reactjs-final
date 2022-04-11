import { getByPlaceholderText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { toHaveValue } from "@testing-library/jest-dom";
import UseStateDemo from "./UseStateDemo";

describe("Test Counter App", () => {
  test("Render the Component", () => {
    const { getByText, getByTestId, getByRole } = render(<UseStateDemo />);

    const h1Ele = getByText("Counter App");
    const lblCount = getByTestId("count");
    const btn = getByText(/Click Me!/);

    expect(h1Ele).toBeInTheDocument();
    expect(lblCount).toBeInTheDocument();
    expect(btn).toBeInTheDocument();

    //screen.debug();
  });

  test("Should initial count be 0", () => {
    const { queryByText } = render(<UseStateDemo />);

    const lblCount = queryByText("0");
    expect(lblCount).toBeInTheDocument();

    //screen.debug(lblCount);
  });

  test("Should click one show 1", () => {
    const { queryByText, getByText } = render(<UseStateDemo />);

    const lblCount = queryByText("0");
    const btn = getByText(/Click Me!/);

    userEvent.click(btn);
    const lblCountNew = queryByText("1");
    expect(lblCountNew).toBeInTheDocument();

    //screen.debug(lblCountNew);
  });

  test("Should click four time show 4", () => {
    const { queryByText, getByText } = render(<UseStateDemo />);

    const lblCount = queryByText("0");
    const btn = getByText(/Click Me!/);

    userEvent.click(btn);
    userEvent.click(btn);
    userEvent.click(btn);
    userEvent.click(btn);

    const lblCountNew = queryByText("4");
    expect(lblCountNew).toBeInTheDocument();

    //screen.debug(lblCountNew);
  });
});

describe("Test Word Enter App", () => {
  test("Render the Component", () => {
    const { getByText, getByPlaceholderText } = render(<UseStateDemo />);

    const txtBox = getByPlaceholderText("Enter something...");
    const lblName = getByText("Nuwan");

    expect(txtBox).toBeInTheDocument();
    expect(txtBox).not.toHaveValue();
    expect(lblName).toBeInTheDocument();

    //screen.debug();
  });

  test("Type text into the textbox", () => {
    const { getByText, getByPlaceholderText } = render(<UseStateDemo />);

    const txtBox = getByPlaceholderText("Enter something...");
    const lblName = getByText("Nuwan");

    userEvent.type(txtBox, "JavaScript");
    expect(txtBox).toHaveProperty("value", "JavaScript");
    expect(lblName).toHaveTextContent("JavaScript");

    //screen.debug();
  });
});
