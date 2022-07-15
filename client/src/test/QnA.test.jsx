import React from 'react';
import ReactDOM from 'react-dom';
// import { render, getByText } from '@testing-library/dom';
import QnA from '../components/QnA/QnA';

// it('render QnA without crashing', () => {
//   const { getByText } = render(<QnA/>);
//   expect(getByText('Questions')).toBeInTheDocument();
// });

it('renders QnA without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QnA />, div);
});
