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

    expect(await screen.findByText(/Arthur Dent/i)).toBeInTheDocument();
  });
});
