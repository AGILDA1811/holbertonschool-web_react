import { fireEvent, render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('renders all required elements and ignores case', () => {
    render(<Notifications />);

    const title = screen.getByText(/here is the list of notifications/i);
    const button = screen.getByRole('button', { name: /close/i });
    const list = screen.getByRole('list');
    const firstNotification = screen.getByText(/new course available/i);
    const secondNotification = screen.getByText(/new resume available/i);
    const latestNotification = screen.getByText(/urgent requirement/i);

    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(firstNotification).toBeInTheDocument();
    expect(secondNotification).toBeInTheDocument();
    expect(latestNotification).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('clicking the close button logs to console', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    render(<Notifications />);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));

    expect(logSpy).toHaveBeenCalledWith('Close button has been clicked');

    logSpy.mockRestore();
  });
});
