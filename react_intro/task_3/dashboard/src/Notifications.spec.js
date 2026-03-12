import { fireEvent, render, screen, within } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('renders all required elements and ignores case', () => {
    render(<Notifications />);

    const title = screen.getByText(/here is the list of notifications/i);
    const button = screen.getByRole('button', { name: /close/i });
    const list = screen.getByRole('list');
    const icon = within(button).getByRole('img', { name: /close icon/i });
    const items = screen.getAllByRole('listitem');
    const firstNotification = screen.getByText(/new course available/i).closest('li');
    const secondNotification = screen.getByText(/new resume available/i).closest('li');
    const latestNotification = screen.getByText(/urgent requirement/i).closest('li');

    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(firstNotification).toBeInTheDocument();
    expect(secondNotification).toBeInTheDocument();
    expect(latestNotification).toBeInTheDocument();
    expect(items).toHaveLength(3);
    expect(firstNotification).toHaveAttribute('data-priority', 'default');
    expect(secondNotification).toHaveAttribute('data-priority', 'urgent');
    expect(latestNotification).toHaveAttribute('data-priority', 'urgent');
    expect(latestNotification).toHaveTextContent(/urgent requirement/i);
    expect(latestNotification).toHaveTextContent(/complete by eod/i);
  });

  test('clicking the close button logs to console', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    render(<Notifications />);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));

    expect(logSpy).toHaveBeenCalledWith('Close button has been clicked');

    logSpy.mockRestore();
  });
});
