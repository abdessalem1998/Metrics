import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Home from './home';

describe('Home page test', () => {
  test('home page with store check', () => {
    const homepage = render(
      <Router>
        <Provider store={store}>
          <Home />
        </Provider>
      </Router>,
    );

    expect(homepage).toMatchSnapshot();
  });
});
