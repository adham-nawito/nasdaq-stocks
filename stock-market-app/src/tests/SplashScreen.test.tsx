import { render, screen } from '@testing-library/react';
import SplashScreen from '../components/SplashScreen';
import React from 'react';

import '@testing-library/jest-dom';


test("renders and displays the logo", async () =>
{
  render(<SplashScreen />);
  const logo = await screen.findByAltText(/Nasdaq Logo/i);
  expect(logo).toBeInTheDocument();
});


test("Developer name exists in the splash screen", () =>
{

  render(<SplashScreen />);

  const nameElement = screen.getByText(/Developed by Adham Nawito/i);
  expect(nameElement).toBeInTheDocument();
});