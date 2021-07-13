import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  // Render crée un virtual DOM
  render(<App />);
  // Screen permet d'accéder au virtual DOM
  const linkElement = screen.getByText(/lean react/i);

  // Get by role pointe la balise
  // const linkElement = screen.getByRole("link", { name: /learn react/i });
  expect(linkElement).toBeInTheDocument();
});
