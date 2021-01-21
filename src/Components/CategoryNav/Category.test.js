import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Category from './Category';

test('renders Category', () => {
  render(<BrowserRouter><Category /></BrowserRouter>);  
});
