import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

afterEach(cleanup);

const mockToggleModal = jest.fn();

const currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1
};

describe('modal is rendering', () => {
  it('renders', () => {
    render(<Modal currentPhoto={currentPhoto}/>)
  });
  it('matches snapshot', () => {
    const { asFragment } = render(<Modal currentPhoto={currentPhoto}/>)
    expect(asFragment()).toMatchSnapshot()
  })
});

describe('click event', () => {
  it('calls onClose handler', () => {
    //arrange
    render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal}/>)
    //act
    fireEvent.click(screen.getByText('Close this modal'));
    //assert
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  })
})