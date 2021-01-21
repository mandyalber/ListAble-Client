import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ListLink from './ListLink';

test('renders ListLink', () => {
  render(<BrowserRouter><ListLink /></BrowserRouter>);  
});
