import { fireEvent, render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications', () => {
  test('renders the notifications title', () => {
    render(<Notifications />);

    expect(
      screen.getByText(/here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  test('renders the close button', () => {
    render(<Notifications />);

    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
  });

  test('renders 3 notification items', () => {
    render(<Notifications />);

    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('logs a message when the close button is clicked', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    render(<Notifications />);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));

    expect(logSpy).toHaveBeenCalledWith('Close button has been clicked');

    logSpy.mockRestore();
  });
});
