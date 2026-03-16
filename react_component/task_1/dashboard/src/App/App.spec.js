import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders the Notifications, Header, Login and Footer components", () => {
    render(<App />);

    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
    expect(
      screen.queryByText(/here is the list of notifications/i)
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: /school dashboard/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/login to access the full dashboard/i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /ok/i })).toBeInTheDocument();
    expect(screen.queryByRole("table")).not.toBeInTheDocument();
  });

  test("calls logOut once when Ctrl+H is pressed", () => {
    const logOut = jest.fn();
    render(<App logOut={logOut} />);

    fireEvent.keyDown(window, { key: "h", ctrlKey: true });
    expect(logOut).toHaveBeenCalledTimes(1);
  });

  test('calls alert with "Logging you out" when Ctrl+H is pressed', () => {
    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
    render(<App />);

    fireEvent.keyDown(window, { key: "h", ctrlKey: true });
    expect(alertSpy).toHaveBeenCalledWith("Logging you out");

    alertSpy.mockRestore();
  });
});
