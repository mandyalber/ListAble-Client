import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';

test('renders LandingPage', () => {
  render(<BrowserRouter><LandingPage /></BrowserRouter>);  
});
