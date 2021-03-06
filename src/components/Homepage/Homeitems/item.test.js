import React from 'react';
import { render } from '@testing-library/react';
import Item from './Item';

describe('Item test', () => {
  test('Item should recive data and render it correctly', () => {
    const homepage = render(
      <Item
        name="country"
        date="02-02-2022"
        totalConfirmed={200}
        totalDeaths={10}
        dateConfirmed={50}
        dateDeaths={3}
        filtered
      />,
    );

    expect(homepage).toMatchSnapshot();
  });
});
