import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Board from "./Componentss/Board";
import Display from "./Componentss/Display";



test('renders without crashing', () => {
  const wrapper = rtl.render(<App/>)
  expect(wrapper).toBeVisible
});


test('renders dashboard component', () => {
  const wrapper = rtl.render(<Board/>)
  const element = wrapper.getByText(/hit/i)
  expect(element).toBeInTheDocument()
}) 