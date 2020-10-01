import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AnimalForm from "./components/AnimalForm";

test("user can fill out and submit form", () => {
  //Arrange, render component
  render(<AnimalForm />);
  //Act, query, fill out, click button
  //fyi - screen.findByText can search for partial phrases or words but doesn't always work for input fields
  const speciesInput = screen.getByLabelText(/species/i);
  const ageInput = screen.getByLabelText(/age/i);
  const notesInput = screen.getByLabelText(/notes/i);
  const button = screen.getByText(/submit/i);

  fireEvent.change(speciesInput, { target: { value: "canine" } });
  fireEvent.change(ageInput, { target: { value: "5" } });
  fireEvent.change(notesInput, { target: { value: "so cute" } });

  fireEvent.click(button);
  // Assert, test that form input exists
  const newAnimal = screen.getByText(/canine/i);
  expect(newAnimal).toBeInTheDocument();
  expect(newAnimal).toBeTruthy();
  // console.log(AnimalForm);
});
