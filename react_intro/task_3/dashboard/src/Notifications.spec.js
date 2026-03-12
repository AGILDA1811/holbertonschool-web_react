import { fireEvent, render, screen } from "@testing-library/react";
import Notifications from "./Notifications.jsx";

describe("Notifications component", () => {
  test("renders the notifications list and handles the close button", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    render(<Notifications />);

    expect(
      screen.getByText(/here is the list of notifications/i)
    ).toBeInTheDocument();

    const closeButton = screen.getByRole("button", { name: /close/i });
    expect(closeButton).toBeInTheDocument();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
    expect(listItems[0]).toHaveTextContent(/new course available/i);
    expect(listItems[1]).toHaveTextContent(/new resume available/i);
    expect(listItems[2]).toHaveTextContent(/urgent requirement/i);
    expect(listItems[2]).toHaveTextContent(/complete by eod/i);

    fireEvent.click(closeButton);
    expect(consoleSpy).toHaveBeenCalledWith("Close button has been clicked");

    consoleSpy.mockRestore();
  });
});
