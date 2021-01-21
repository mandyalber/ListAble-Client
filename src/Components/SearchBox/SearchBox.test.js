import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchBox from './SearchBox';

test('renders SearchBox', () => {
  render(<SearchBox/>);  
});
