import { render, screen } from 'utils/testing';
import Home from '.';
import mocks from './mocks/graphql';

describe('Home', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should display user name', async () => {
    render(<Home />, {
      mocks: [mocks.userSuccessMock],
    });

    // is loading...
    expect(screen.getByRole('progressbar')).toBeInTheDocument();

    // now should has data...
    expect(await screen.findByText(/John Doe/i)).toBeInTheDocument();
  });
});
