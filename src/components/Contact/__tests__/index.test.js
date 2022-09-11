import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe('Contact component', () => {
  it('renders', () => {
    render(<ContactForm/>)
  })
  it('matches snapshot', ()=>{
    const { asFragment } = render(<ContactForm/>)
    expect(asFragment()).toMatchSnapshot()
  })
})

describe('h1tag', ()=>{
  it('mtches', () =>{
    render(<ContactForm/>)
    expect(screen.getByTestId('contact')).toHaveTextContent('Contact me')
  })

  describe('submit button', () => {
    render(<ContactForm/>)
    expect(screen.getByTestId('subButt')).toHaveTextContent('Submit')
  })
})