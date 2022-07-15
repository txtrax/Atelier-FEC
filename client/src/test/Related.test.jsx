/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';
import IdContext from '../components/Context';

afterEach(() => {
  cleanup();
});

it('should render related products component', () => {
  const productId = jest.fn();
  const relatedProducts = render(
    <IdContext.Provider value={{ productId }}>
      <RelatedProducts />
    </IdContext.Provider>,
  );
  expect(relatedProducts.container).toBeInTheDocument();
});
