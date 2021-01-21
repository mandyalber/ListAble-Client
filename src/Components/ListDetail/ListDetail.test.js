import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ListDetail from './ListDetail';

test('renders ListDetail', () => {
  render(<BrowserRouter><ListDetail /></BrowserRouter>);  
});
