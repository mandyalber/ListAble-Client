import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CategoryNav from './CategoryNav';

test('renders CategoryNav', () => {
  render(<BrowserRouter><CategoryNav /></BrowserRouter>);  
});
