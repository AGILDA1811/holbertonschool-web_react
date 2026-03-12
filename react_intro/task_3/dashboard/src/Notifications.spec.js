import { fireEvent, render, screen } from "@testing-library/react";
import Notifications from "./Notifications";

describe("Notifications component", () => {
  test("renders the notifications title", () => {
    render(<Notifications />);

    const notificationTitle = screen.getByText(
      /here is the list of notifications/i
    );
    expect(notificationTitle).toBeInTheDocument();
  });

  test("renders the close button", () => {
    render(<Notifications />);

    const closeButton = screen.getByRole("button", { name: /close/i });
    expect(closeButton).toBeInTheDocument();
  });

  test("renders 3 list items", () => {
    render(<Notifications />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
  });

  test("logs when the close button is clicked", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    render(<Notifications />);
    fireEvent.click(screen.getByRole("button", { name: /close/i }));

    expect(consoleSpy).toHaveBeenCalledWith("Close button has been clicked");

    consoleSpy.mockRestore();
  });
});
