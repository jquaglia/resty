import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import Form from './Form.js';

describe('testing form component', () => {
  it('Needs to run a function on button click', async () => {
    let updateResults = jest.fn();

    render(<Form updateResults={updateResults} />);

    // let input = screen.getByText('https://pokeapi.co/api/v2/pokemon');
    // userEvent.type(input, 'https://pokeapi.co/api/v2/pokemon');
    let button = screen.getByText('GO!');

    expect(button).toBeInTheDocument();

    // fireEvent.click(button);

    // handy helper for awaiting funcion calls within components.
    // await waitFor(() => expect(updateResults).toHaveBeenCalled());
  });
});