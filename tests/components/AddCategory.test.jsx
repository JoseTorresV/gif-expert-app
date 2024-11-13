import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  test("Debe cambiar el valor de la caja de texto", () => {
    // creo sujeto de pruebas
    render(<AddCategory onNewCategory={() => {}} />);
    // extraigo el input
    const input = screen.getByRole("textbox");
    // disparo el evento
    fireEvent.input(input, { target: { value: "Saitama" } });
    // Asercion de lo que espero que suceda
    expect(input.value).toBe("Saitama");
  });

  test("Debe llamar oneNewCategory si el input tiene un valor", () => {
    const inputValue = "Dragon Ball Z";
    // jest.fn() serve per inserire una funzione mock
    const onNewCategory = jest.fn();
    // creo sujeto de pruebas
    render(<AddCategory onNewCategory={onNewCategory} />);
    // extraigo el input
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    // disparo el evento
    fireEvent.submit(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // Asercion de lo que espero que suceda
    // screen.debug()
    expect(input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenLastCalledWith(inputValue);
  });

  test("No debe llamar el onNewCategory si el input està vacio", () => {
    const onNewCategory = jest.fn();
    // creo sujeto de pruebas
    render(<AddCategory onNewCategory={() => onNewCategory} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);
    // screen.debug()

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
