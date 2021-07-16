import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import { replaceCamelWithSpaces } from './App'

test('button has correct initial color', () => {
  render(<App />)

  // const colorButton = screen.getByRole("button", { name: "Change to blue" });
  // expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // // fireEvent déclenche un événement sur le virtual DOM
  // fireEvent.click(colorButton);
  // expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // expect(colorButton).toHaveTextContent("Change to red");
})

// test("initial conditions", () => {
//   render(<App />);
//   const colorButton = screen.getByRole("button", { name: "Change to blue" });
//   expect(colorButton).toBeEnabled();

//   const checkbox = screen.getByRole("checkbox");
//   expect(checkbox).not.toBeChecked();
// });

// test("Checkbox disables button on first click and enables on second click", () => {
//   render(<App />);
//   const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
//   const button = screen.getByRole("button", { name: "Change to blue" });

//   fireEvent.click(checkbox);
//   expect(button).toBeDisabled();

//   fireEvent.click(checkbox);
//   expect(button).toBeEnabled();
// });

// test("disabled button has gray background and reverts to red", () => {
//   render(<App />);
//   const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
//   const button = screen.getByRole("button", { name: "Change to blue" });

//   //disable button
//   fireEvent.click(checkbox);
//   expect(button).toHaveStyle("background-color: gray");

//   fireEvent.click(checkbox);
//   expect(button).toHaveStyle("background-color: red");
// });

// test("Click disabled button has gray background and reverts to blue", () => {
//   render(<App />);
//   const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
//   const button = screen.getByRole("button", { name: "Change to blue" });

//   //disable button
//   fireEvent.click(button);

//   // disable button
//   fireEvent.click(checkbox);
//   expect(button).toHaveStyle("background-color: gray");

//   // re-enable button
//   fireEvent.click(checkbox);
//   expect(button).toHaveStyle("background-color: blue");
// });

// // Unit testing function
// describe("spaces before camel-case capital letters", () => {
//   test("Works for no inner capital letters", () => {
//     expect(replaceCamelWithSpaces("Red")).toBe("Red");
//   });
//   test("works for one inner capital letter", () => {
//     expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
//   });
//   test("Works for multiple inner capital letters", () => {
//     expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
//   });
// });
