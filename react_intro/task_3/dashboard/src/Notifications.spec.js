import { fireEvent, render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('renders all required elements and ignores case', () => {
    render(<Notifications />);

    expect(
      screen.getByText(/here is the list of notifications/i)
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
    expect(screen.getByText(/new course available/i)).toBeInTheDocument();
    expect(screen.getByText(/new resume available/i)).toBeInTheDocument();
    expect(screen.getByText(/urgent requirement/i)).toBeInTheDocument();
    expect(screen.getByText(/complete by eod/i)).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('logs when the close button is clicked', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    render(<Notifications />);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));

    expect(logSpy).toHaveBeenCalledWith('Close button has been clicked');

    logSpy.mockRestore();
  });
});
