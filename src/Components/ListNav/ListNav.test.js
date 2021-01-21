import { render } from '@testing-library/react';
import ListNav from './ListNav';

test('renders ListNav', () => {
  render(<ListNav matchId={1} category={1}/>);  
});
