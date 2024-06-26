import { render, screen } from "@testing-library/react";
import App from "../src/App";
import { expect, test } from "vitest";
import React from "react";

test("renders home react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders info link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Nosotros/i);
  expect(linkElement).toBeInTheDocument();
});
