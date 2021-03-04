import * as React from 'react';
import { render, screen } from 'utils/testing';
import Loading from '.';

describe('Loading', () => {
  it('must render <Loading> correctly', () => {
    const { rerender } = render(<Loading />);
    expect(screen.getByTestId(/loading-overlay/i)).toBeInTheDocument();
    rerender(<Loading overlay={false} />);
    expect(screen.queryByTestId(/loading-overlay/i)).not.toBeInTheDocument();
  });

  it('snapshot', () => {
    const { container } = render(<Loading />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="Loading__OverlayContainer-sc-10vzu09-0 fHiCbX"
          data-testid="loading-overlay"
        >
          <div
            class="Loading__LoadingWrapper-sc-10vzu09-1 bzmrvi"
          >
            <div
              class="MuiCircularProgress-root MuiCircularProgress-colorPrimary MuiCircularProgress-indeterminate"
              role="progressbar"
              style="width: 40px; height: 40px;"
            >
              <svg
                class="MuiCircularProgress-svg"
                viewBox="22 22 44 44"
              >
                <circle
                  class="MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate"
                  cx="44"
                  cy="44"
                  fill="none"
                  r="20.2"
                  stroke-width="3.6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    `);
  });
});
