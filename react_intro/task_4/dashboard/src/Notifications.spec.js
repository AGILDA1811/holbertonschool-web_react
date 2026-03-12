import { fireEvent, render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications', () => {
  test('renders the notifications content', () => {
    render(<Notifications />);

    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('logs when the close button is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    render(<Notifications />);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));

    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');

    consoleSpy.mockRestore();
  });
});
