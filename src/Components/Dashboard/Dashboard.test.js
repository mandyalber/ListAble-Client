import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard';

test('renders Dashboard', () => {
  render(<BrowserRouter><Dashboard /></BrowserRouter>);  
});
