import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en el hook useFetchGifs", () => {
  test("Debe regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    const { images, isLoading } = result.current;
    console.log(result);

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
    // useFetchGifs()
  });

  test("Debe retornar un array de imagenes e isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    // Uso il waitFor per aspettare che la funzione mi dia un risultato
    await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0));
    // Una volta ricevuta una risposta ho le immagini ed il loading in false perchè non più necessario
    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();

  });
});
