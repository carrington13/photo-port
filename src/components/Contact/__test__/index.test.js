// __tests__/Contact.test.js
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Contact from '..'

afterEach(cleanup)

describe('Contact component renders', () => {
  it('renders', () => {
  render(<Contact />);
});

  it('Matches snapshot test', () => {
    const { asFragment } = render(<Contact />)
    expect(asFragment()).toMatchSnapshot()
  })
})


it('checks h1 element for content', () => {
  const { getByTestId } = render(<Contact />)
  expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
})
 
it('tests button text content', () => {
  const { getByTestId } = render(<Contact />)
  expect(getByTestId('button')).toHaveTextContent('Submit')
})