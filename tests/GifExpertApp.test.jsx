import { fireEvent, screen } from "@testing-library/dom";
import { GifExpertApp } from "../src/GifExpertApp";
import { render } from "@testing-library/react";

describe("Pruebas en <GifExpertApp />", () => {
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<GifExpertApp />);
    // console.log(container);
    expect(container).toMatchSnapshot()
  });

  test("Debe controlar si la nueva categoria esta incluida", () => {
    const categoryValue = 'Dragon Ball';
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { element: { value: categoryValue } })
    // console.log('input => ', input)
    // screen.debug()
    expect(input.value).toBeTruthy()
  });
});
