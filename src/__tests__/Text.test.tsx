import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Text } from '../components';

describe('Text', () => {
  test('should render', async () => {
    const value = `My random value: ${Math.random()} - and PI! ${Math.PI}`;
    render(<Text>{value}</Text>);
    const item = await screen.findByText(value);

    expect(item.innerText === value).toBeTruthy();
  });
});

export default null;
