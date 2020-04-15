import React from 'react';
import { render, fireEvent, findAllByTestId } from "@testing-library/react"; 
import * as yeet from "@testing-library/react";
import NavBar from "./components/NavBar";
import App from "./App";

//My tests start here

//testing if APP.js renders
it('Renders App without crashing', () => {
  render(<App />);
});

//NavBar Renders
it("renders NavBar without crashing", () => {
  render(<NavBar />);
});

//test to check if the toggle button changes the mode
test('dark mode button changes the class', () => {
  const {getByTestId} = yeet.render(<NavBar />)
  const darkButton = getByTestId('darkToggleButton')
  expect(darkButton.classList.contains('toggled')).toBe(false)
  fireEvent.click(darkButton)
  expect(darkButton.classList.contains('toggled')).toBe(true)
})